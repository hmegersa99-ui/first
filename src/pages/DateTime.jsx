import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import { useDating } from "../context/DatingContext";

const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
];

function DateTime() {
  const navigate = useNavigate();

  const {
    selectedDate,
    setSelectedDate,
    selectedTime,
    setSelectedTime,
  } = useDating();

  const today = new Date().toISOString().split("T")[0];

  const unavailableTimes = ["12:00 PM", "4:00 PM"];

  const canContinue = selectedDate && selectedTime;

  return (
    <main className="datetime-page">
      <div className="datetime-container">

        <ProgressBar currentStep={2} />

        <div className="datetime-card">

          <div className="datetime-header">
            <p className="page-label">STEP 2 OF 4</p>

            <h1>Choose Your Date & Time</h1>

            <p>
              Pick a day and time that works for your date.
            </p>
          </div>

          <div className="date-section">

            <label htmlFor="date">
              Choose a date
            </label>

            <input
              id="date"
              type="date"
              min={today}
              value={selectedDate}
              onChange={(event) => {
                setSelectedDate(event.target.value);
                setSelectedTime("");
              }}
            />

          </div>

          <div className="time-section">

            <div className="section-title">
              <h2>Choose a time</h2>

              <span>
                10:00 AM – 8:00 PM
              </span>
            </div>

            <div className="time-grid">

              {timeSlots.map((time) => {
                const unavailable =
                  unavailableTimes.includes(time);

                return (
                  <button
                    key={time}
                    type="button"
                    disabled={unavailable}
                    className={`time-slot ${
                      selectedTime === time
                        ? "selected"
                        : ""
                    } ${
                      unavailable
                        ? "unavailable"
                        : ""
                    }`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}

                    {unavailable && (
                      <small>Unavailable</small>
                    )}
                  </button>
                );
              })}

            </div>

          </div>

          <div className="datetime-actions">

            <button
              className="back-button"
              onClick={() => navigate("/terms")}
            >
              ← Back
            </button>

            <button
              className="continue-button"
              disabled={!canContinue}
              onClick={() => navigate("/places")}
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

export default DateTime;