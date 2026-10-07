import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import { useDating } from "../context/DatingContext";

function Terms() {
  const navigate = useNavigate();

  const { termsAccepted, setTermsAccepted } = useDating();

  return (
    <main className="terms-page">
      <div className="terms-container">

        <ProgressBar currentStep={1} />

        <div className="terms-card">

          <div className="terms-header">
            <p className="page-label">STEP 1 OF 4</p>

            <h1>Terms & Agreement</h1>

            <p>
              Before planning your date, please take a moment
              to review our community and safety guidelines.
            </p>
          </div>

          <div className="terms-content">

            <section>
              <h2>1. Respect & Community</h2>

              <p>
                DATELO is designed to help people make meaningful
                connections in a respectful environment. Treat
                everyone with kindness, respect and honesty.
              </p>
            </section>

            <section>
              <h2>2. Safety First</h2>

              <p>
                Never share sensitive personal information with
                someone you have just met. If something makes you
                uncomfortable, leave the situation and seek help.
              </p>
            </section>

            <section>
              <h2>3. Meeting Safety</h2>

              <p>
                We recommend meeting in public places, informing
                someone you trust about your plans, and keeping
                control of your own transportation.
              </p>
            </section>

            <section>
              <h2>4. Privacy</h2>

              <p>
                Respect the privacy of other people. Do not share
                another person's personal information, photographs,
                or conversations without their permission.
              </p>
            </section>

            <section>
              <h2>5. Community Guidelines</h2>

              <p>
                Harassment, threats, discrimination, impersonation,
                scams and abusive behavior are not permitted.
              </p>
            </section>

          </div>

          <label className="agreement-checkbox">
            <input
              type="checkbox"
              checked={termsAccepted}
              onChange={(event) =>
                setTermsAccepted(event.target.checked)
              }
            />

            <span>
              I have read and agree to the Terms & Agreement.
            </span>
          </label>

          <div className="terms-actions">

            <button
              className="back-button"
              onClick={() => navigate("/")}
            >
              ← Back
            </button>

            <button
              className="continue-button"
              disabled={!termsAccepted}
              onClick={() => navigate("/date-time")}
            >
              Continue
              <span>→</span>
            </button>

          </div>

        </div>
      </div>
    </main>
  );
}

export default Terms;