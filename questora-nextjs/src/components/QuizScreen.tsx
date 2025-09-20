"use client";
import React from "react";

interface QuizScreenProps {
  quizState: any;
  timeRemaining: number;
  selectedOption: string | null;
  showFeedback: boolean;
  selectOption: (option: string) => void;
  MULTIPLIERS: number[];
}

export default function QuizScreen({ 
  quizState,
  timeRemaining,
  selectedOption,
  showFeedback,
  selectOption,
  MULTIPLIERS
}: QuizScreenProps) {

  const currentQuestion = quizState.selectedQuestions[quizState.currentQuestionIndex];
  const totalQuestions = quizState.selectedQuestions.length;
  const progressPercentage = (quizState.currentQuestionIndex / totalQuestions) * 100;

  // Randomizar as opções para cada pergunta
  const shuffledOptions = React.useMemo(() => {
    if (!currentQuestion) return [];
    return [...currentQuestion.opcoes].sort(() => Math.random() - 0.5);
  }, [currentQuestion]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const formatScore = (score: number) => {
    return score.toFixed(2);
  };

  return (
    <>
      {/* Header */}
      <div className="header">
        <h1>🎯 Questora</h1>
        <p>Teste seu conhecimento!</p>
      </div>

      {/* Quiz Header */}
      <div className="quiz-header">
        <div className="progress-info">
          <div className="left-info">
            <div>Pergunta {quizState.currentQuestionIndex + 1} de {totalQuestions}</div>
            <div className="points-info">Valor da Rodada: {quizState.selectedCredits}</div>
            <div className="points-info">Acumulado: {formatScore(quizState.accumulatedScore)}</div>
          </div>
          <div className="multiplier-info">
            <span>Multiplicador: {MULTIPLIERS[quizState.currentMultiplierIndex]}x</span>
            <div className="errors-info">
              <span>Erros restantes: {quizState.maxErrors - quizState.currentErrors}</span>
            </div>
            <div className="timer-info">
              <span>⏰ {formatTime(timeRemaining)}</span>
            </div>
          </div>
        </div>
        <div className="progress-bar">
          <div 
            id="progress-fill"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      {currentQuestion && (
        <div className="question-card">
          <div className="question-header">
            <h3>
              {currentQuestion.pergunta}{' '}
              <span 
                className={`difficulty-badge difficulty-${currentQuestion.dificuldade}`}
                style={{ 
                  backgroundColor: currentQuestion.dificuldade === 'facil' ? '#10b981' : 
                                 currentQuestion.dificuldade === 'medio' ? '#f59e0b' : '#ef4444',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  marginLeft: '8px'
                }}
              >
                {currentQuestion.dificuldade === 'facil' ? 'Fácil' : 
                 currentQuestion.dificuldade === 'medio' ? 'Médio' : 'Difícil'}
              </span>
            </h3>
          </div>
          
          {/* Options */}
          <div className="options-container">
            {shuffledOptions.map((opcao, index) => {
              let buttonClass = "option-btn";
              
              if (showFeedback && selectedOption === opcao) {
                const isCorrect = opcao === currentQuestion.correta;
                buttonClass += isCorrect ? " correct-feedback" : " wrong-feedback";
              } else if (showFeedback && opcao === currentQuestion.correta && selectedOption === currentQuestion.correta) {
                // Só mostra a resposta correta se o participante acertou
                buttonClass += " correct-answer";
              }
              
              return (
                <button
                  key={index}
                  className={buttonClass}
                  onClick={() => selectOption(opcao)}
                  disabled={showFeedback}
                >
                  {opcao}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
