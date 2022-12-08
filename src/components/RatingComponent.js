import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const RatingComponent = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="App">
      <Rating
        onClick={handleRating}
        ratingValue={rating}
        size={20}
        label
        transition
        fillColor="orange"
        emptyColor="gray"
        className="foo"
      />
    </div>
  );
};

export default RatingComponent;
