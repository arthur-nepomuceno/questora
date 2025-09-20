"use client";

interface ReviewScreenProps {
  quizState: any;
  setScreen: (screen: any) => void;
}

export default function ReviewScreen({ quizState, setScreen }: ReviewScreenProps) {

  return (
    <>
      {/* Header */}
      <div className="header">
        <h1>🎯 Questora - SoPerguntas</h1>
        <p>Teste seus conhecimentos em diferentes áreas!</p>
      </div>

      {/* Review Header */}
      <div className="review-header">
        <h2>📋 Revisão das Respostas</h2>
        <button
          className="btn btn-secondary"
          onClick={() => setScreen("results")}
        >
          Voltar aos Resultados
        </button>
      </div>

      {/* Review List */}
      <div className="review-list">
        {quizState.userAnswers.map((answer, index) => (
          <div
            key={index}
            className={`review-item ${answer.isCorrect ? 'correct' : 'wrong'}`}
          >
            {/* Question */}
            <div className="review-question">
              <div className="question-number">{index + 1}</div>
              <div className="question-text">{answer.question.pergunta}</div>
            </div>

            {/* Answers */}
            <div className="review-answers">
              {/* User Answer */}
              <div className={`user-answer ${answer.isCorrect ? 'correct' : 'wrong'}`}>
                <span>Sua resposta: {answer.userAnswer}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
