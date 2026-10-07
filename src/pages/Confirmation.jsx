import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import { useDating } from "../context/DatingContext";

function Confirmation() {
  const navigate = useNavigate();

  const {
    selectedDate,
    selectedTime,
    selectedPlace,
  } = useDating();

  const canConfirm =
    selectedDate &&
    selectedTime &&
    selectedPlace;

  const formatDate = (date) => {
    if (!date) return "Not selected";

    const dateObject = new Date(`${date}T00:00:00`);

    return dateObject.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleConfirm = () => {
    if (!canConfirm) return;

    navigate("/success");
  };

  return (
    <main className="confirmation-page">
      <div className="confirmation-container">

        <ProgressBar currentStep={4} />

        <div className="confirmation-header">
          <p className="page-label">STEP 4 OF 4</p>

          <h1>Confirm Your Date</h1>

          <p>
            Everything looks good? Review your plans
            before confirming your date.
          </p>
        </div>

        <div className="confirmation-card">

          <div className="confirmation-section">
            <div className="confirmation-icon">
              📅
            </div>

            <div className="confirmation-info">
              <span>Date</span>

              <strong>
                {formatDate(selectedDate)}
              </strong>
            </div>

            <button
              type="button"
              className="edit-button"
              onClick={() => navigate("/date-time")}
            >
              Edit
            </button>
          </div>

          <div className="confirmation-divider"></div>

          <div className="confirmation-section">
            <div className="confirmation-icon">
              🕐
            </div>

            <div className="confirmation-info">
              <span>Time</span>

              <strong>
                {selectedTime || "Not selected"}
              </strong>
            </div>

            <button
              type="button"
              className="edit-button"
              onClick={() => navigate("/date-time")}
            >
              Edit
            </button>
          </div>

          <div className="confirmation-divider"></div>

          <div className="confirmation-section place-confirmation">

            {selectedPlace ? (
              <>
                <img
                  src={selectedPlace.image}
                  alt={selectedPlace.name}
                  className="confirmation-place-image"
                />

                <div className="confirmation-info">
                  <span>Place</span>

                  <strong>
                    {selectedPlace.name}
                  </strong>

                  <small>
                    📍 {selectedPlace.area}
                  </small>

                  <small>
                    {selectedPlace.category}
                  </small>
                </div>
              </>
            ) : (
              <div className="confirmation-info">
                <span>Place</span>

                <strong>
                  No place selected
                </strong>
              </div>
            )}

            <button
              type="button"
              className="edit-button"
              onClick={() => navigate("/places")}
            >
              Change
            </button>

          </div>

        </div>

        <div className="confirmation-actions">

          <button
            type="button"
            className="back-button"
            onClick={() => navigate("/places")}
          >
            ← Back
          </button>

          <button
            type="button"
            className="continue-button confirm-button"
            disabled={!canConfirm}
            onClick={handleConfirm}
          >
            Confirm Date
            <span>♥</span>
          </button>

        </div>

      </div>
    </main>
  );
}

export default Confirmation;