"use client";

interface StartScreenProps {
  startQuiz: (category: string) => void;
}

export default function StartScreen({ startQuiz }: StartScreenProps) {

  return (
    <>
      {/* Header */}
      <div className="header">
        <h1>🎯 Questora</h1>
        <p>Teste seu conhecimento!</p>
      </div>

      {/* Main Card */}
      <div className="welcome-card">
        <h2>Bem-vindo ao Questora!</h2>
        <p>Escolha uma categoria:</p>
        
        {/* Category Selection */}
        <div className="category-selection">
          <div 
            className="category-card"
            onClick={() => startQuiz("futebol")}
            style={{ cursor: 'pointer' }}
          >
            <div className="category-icon">⚽</div>
            <h3>Futebol</h3>
          </div>
          
          <div 
            className="category-card"
            onClick={() => startQuiz("novelas")}
            style={{ cursor: 'pointer' }}
          >
            <div className="category-icon">📺</div>
            <h3>Novelas</h3>
          </div>
        </div>
      </div>
    </>
  );
}
