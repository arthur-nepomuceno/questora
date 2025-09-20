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
      {/* Logo Questora no estilo Show do Milhão */}
      <div className="questora-logo">
        <h1>🎯 QUESTORA</h1>
        <div className="coin-icon">
          {quizState.currentMultiplierIndex + 1}
        </div>
      </div>

      {/* Timer */}
      <div className="timer-display">
        ⏰ {formatTime(timeRemaining)}
      </div>

      {/* Caixa da pergunta */}
      {currentQuestion && (
        <div className="question-box">
          <div 
            className={`difficulty-badge difficulty-${currentQuestion.dificuldade}`}
          >
            {currentQuestion.dificuldade === 'facil' ? 'FÁCIL' : 
             currentQuestion.dificuldade === 'medio' ? 'MÉDIO' : 'DIFÍCIL'}
          </div>
          <div className="question-text">
            {currentQuestion.pergunta}
          </div>
        </div>
      )}

      {/* Container das alternativas */}
      <div className="alternatives-container">
        {shuffledOptions.map((opcao, index) => {
          let alternativeClass = "alternative-box";
          
          if (showFeedback && selectedOption === opcao) {
            const isCorrect = opcao === currentQuestion.correta;
            alternativeClass += isCorrect ? " correct-feedback" : " wrong-feedback";
          }
          
          return (
            <div
              key={index}
              className={alternativeClass}
              onClick={() => !showFeedback && selectOption(opcao)}
              style={{ cursor: showFeedback ? 'not-allowed' : 'pointer' }}
            >
              <div className="option-number">
                {index + 1}
              </div>
              <div className="alternative-text">
                {opcao}
              </div>
            </div>
          );
        })}
      </div>

      {/* Multiplicadores */}
      <div className="multipliers-display">
        {MULTIPLIERS.map((multiplier, index) => (
          <div 
            key={index}
            className={`multiplier-item ${index === quizState.currentMultiplierIndex ? 'active' : ''}`}
          >
            {multiplier}x
          </div>
        ))}
      </div>
    </>
  );
}
