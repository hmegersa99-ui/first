import { useNavigate } from "react-router-dom";
import { useDating } from "../context/DatingContext";

function Success() {
  const navigate = useNavigate();

  const {
    selectedDate,
    selectedTime,
    selectedPlace,
    resetDate,
  } = useDating();

  const formatDate = (date) => {
    if (!date) return "Not selected";

    return new Date(`${date}T00:00:00`).toLocaleDateString(
      "en-US",
      {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );
  };

  const handlePlanAnother = () => {
    resetDate();
    navigate("/");
  };

  return (
    <main className="success-page">
      <div className="success-card">

        <div className="success-heart">
          ♥
        </div>

        <p className="success-label">
          DATE CONFIRMED
        </p>

        <h1>
          Your Date Is Confirmed ❤️
        </h1>

        <p className="success-message">
          Everything is ready. Have a wonderful time!
        </p>

        <div className="success-details">

          <div className="success-detail">
            <span>📅</span>

            <div>
              <small>Date</small>
              <strong>
                {formatDate(selectedDate)}
              </strong>
            </div>
          </div>

          <div className="success-detail">
            <span>🕐</span>

            <div>
              <small>Time</small>
              <strong>
                {selectedTime || "Not selected"}
              </strong>
            </div>
          </div>

          <div className="success-detail">
            <span>📍</span>

            <div>
              <small>Place</small>
              <strong>
                {selectedPlace?.name || "Not selected"}
              </strong>

              {selectedPlace?.area && (
                <small>
                  {selectedPlace.area}
                </small>
              )}
            </div>
          </div>

        </div>

        <button
          className="plan-another-button"
          onClick={handlePlanAnother}
        >
          Plan Another Date
          <span>→</span>
        </button>

      </div>
    </main>
  );
}

export default Success;