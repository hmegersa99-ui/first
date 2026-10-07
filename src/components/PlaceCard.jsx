function PlaceCard({ place, selected, onSelect }) {
  return (
    <article className={`place-card ${selected ? "selected" : ""}`}>
      <img
        src={place.image}
        alt={place.name}
        className="place-image"
      />

      <div className="place-info">
        <span className="place-category">
          {place.category}
        </span>

        <h3>{place.name}</h3>

        <p className="place-area">
          📍 {place.area}
        </p>

        <p className="place-description">
          {place.description}
        </p>

        <button
          type="button"
          className={`select-place-button ${
            selected ? "selected-button" : ""
          }`}
          onClick={onSelect}
        >
          {selected ? "✓ Selected" : "Select"}
        </button>
      </div>
    </article>
  );
}

export default PlaceCard;