import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import PlaceCard from "../components/PlaceCard";
import places from "../data/places";
import { useDating } from "../context/DatingContext";

function Places() {
  const navigate = useNavigate();

  const {
    selectedPlace,
    setSelectedPlace,
  } = useDating();

  const categories = [
    "Cafés",
    "Restaurants",
    "Parks & Outdoor",
    "Public Places",
  ];

  const handleSelect = (place) => {
    setSelectedPlace(place);
  };

  return (
    <main className="places-page">
      <div className="places-container">

        <ProgressBar currentStep={3} />

        <div className="places-header">
          <p className="page-label">STEP 3 OF 4</p>

          <h1>Choose Your Place</h1>

          <p>
            Pick a place where you would like to meet.
          </p>
        </div>

        {categories.map((category) => {
          const categoryPlaces = places.filter(
            (place) => place.category === category
          );

          return (
            <section
              className="place-category-section"
              key={category}
            >
              <div className="category-heading">
                <h2>{category}</h2>
                <span>
                  {categoryPlaces.length} places
                </span>
              </div>

              <div className="places-grid">
                {categoryPlaces.map((place) => (
                  <PlaceCard
                    key={place.id}
                    place={place}
                    selected={
                      selectedPlace?.id === place.id
                    }
                    onSelect={() => handleSelect(place)}
                  />
                ))}
              </div>
            </section>
          );
        })}

        <div className="places-actions">

          <button
            className="back-button"
            onClick={() => navigate("/date-time")}
          >
            ← Back
          </button>

          <button
            className="continue-button"
            disabled={!selectedPlace}
            onClick={() => navigate("/confirmation")}
          >
            Continue
            <span>→</span>
          </button>

        </div>

      </div>
    </main>
  );
}

export default Places;