import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();

  return (
    <main className="landing-page">
      <div className="hero-overlay"></div>

      <header className="navbar">
        <div className="logo">
          <span>♥</span> DATELO
        </div>
      </header>

      <section className="hero-content">
        <p className="eyebrow">MEET • CONNECT • DISCOVER</p>

        <h1>
          Find Someone
          <span> Special</span>
        </h1>

        <p className="hero-description">
          Meet new people, choose a time and place,
          and make meaningful connections.
        </p>

        <button
          className="start-button"
          onClick={() => navigate("/terms")}
        >
          Get Started
          <span>→</span>
        </button>
      </section>

      <div className="scroll-indicator">
        <span>Scroll to discover</span>
        <div className="scroll-line"></div>
      </div>
    </main>
  );
}

export default Welcome;