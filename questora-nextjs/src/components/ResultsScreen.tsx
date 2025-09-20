"use client";

interface ResultsScreenProps {
  quizState: any;
  timeRemaining: number;
  setScreen: (screen: any) => void;
  restartQuiz: () => void;
}

export default function ResultsScreen({ 
  quizState,
  timeRemaining,
  setScreen,
  restartQuiz
}: ResultsScreenProps) {

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const formatScore = (score: number) => {
    return score.toFixed(2);
  };

  const getEndMessage = () => {
    if (quizState.currentErrors >= quizState.maxErrors) {
      return "Não desista! Pratique mais e você vai melhorar! (Rodada encerrada por atingir 3 erros)";
    } else if (timeRemaining === 0) {
      return "Tempo esgotado! Tente responder mais rapidamente na próxima vez!";
    } else {
      return "Parabéns! Você completou todas as perguntas!";
    }
  };

  return (
    <>
      {/* Header */}
      <div className="header">
        <h1>🎯 Questora - SoPerguntas</h1>
        <p>Teste seus conhecimentos em diferentes áreas!</p>
      </div>

      {/* Main Card */}
      <div className="results-card">
        <h2>🎉 Quiz Finalizado!</h2>
        <p>☝️ {getEndMessage()}</p>

        {/* Statistics Grid */}
        <div className="results-details">
          <div className="stat">
            <span className="stat-label">Acertos</span>
            <span className="stat-value correct">{quizState.correctAnswers}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Erros</span>
            <span className="stat-value wrong">{quizState.wrongAnswers}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Acumulado</span>
            <span className="stat-value">{formatScore(quizState.accumulatedScore)}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Tempo Restante</span>
            <span className="stat-value">{formatTime(timeRemaining)}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="results-actions">
          <button
            className="btn btn-primary"
            onClick={restartQuiz}
          >
            Fazer Novo Quiz
          </button>
          
          <button
            className="btn btn-secondary"
            onClick={() => setScreen("review")}
          >
            Revisar Respostas
          </button>
        </div>
      </div>
    </>
  );
}
