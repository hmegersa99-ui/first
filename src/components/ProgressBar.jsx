const steps = ["Agreement", "Date & Time", "Place", "Confirmation"];

function ProgressBar({ currentStep }) {
  return (
    <div className="progress-wrapper">
      {steps.map((step, index) => {
        const stepNumber = index + 1;

        return (
          <div
            className={`progress-step ${
              stepNumber === currentStep ? "active" : ""
            } ${stepNumber < currentStep ? "completed" : ""}`}
            key={step}
          >
            <div className="progress-circle">
              {stepNumber < currentStep ? "✓" : stepNumber}
            </div>

            <span>{step}</span>
          </div>
        );
      })}
    </div>
  );
}

export default ProgressBar;