"use client";

interface CreditsScreenProps {
  setScreen: (screen: any) => void;
  startQuizWithCredits: (credits: number) => void;
}

export default function CreditsScreen({ setScreen, startQuizWithCredits }: CreditsScreenProps) {

  const creditOptions = [
    { value: 1, icon: "💰", label: "1 Crédito" },
    { value: 2, icon: "💰", label: "2 Créditos" },
    { value: 5, icon: "💎", label: "5 Créditos" },
    { value: 10, icon: "🏆", label: "10 Créditos" }
  ];

  const handleCreditSelect = (credits: number) => {
    startQuizWithCredits(credits);
  };

  return (
    <>
      {/* Header */}
      <div className="header">
        <h1>🎯 Questora - SoPerguntas</h1>
        <p>Teste seus conhecimentos em diferentes áreas!</p>
      </div>

      {/* Main Card */}
      <div className="credits-card">
        <h2>Escolha quantos créditos investir</h2>
        <p>Selecione com quanto deseja participar nesta rodada:</p>
        
        {/* Credit Options */}
        <div className="credits-options">
          {creditOptions.map((option) => (
            <div
              key={option.value}
              className="credit-card"
              onClick={() => handleCreditSelect(option.value)}
            >
              <div className="credit-icon">{option.icon}</div>
              <h3>{option.label}</h3>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <button
          className="btn btn-secondary"
          onClick={() => setScreen("start")}
        >
          Voltar
        </button>
      </div>
    </>
  );
}
