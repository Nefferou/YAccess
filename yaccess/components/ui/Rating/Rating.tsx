import Image from "next/image";
import React from "react";

type RatingProps = {
  rating: number;
};

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const maxRating = 5;
  const svg_star_complete = "/full-star.svg";
  const svg_star_incomplete = "/half-star.svg";

  const stars = [];
  for (let i = 1; i <= maxRating; i++) {
    if (i <= Math.floor(rating)) {
      // Full star
      stars.push(
        <div className="y-rating-half-star w-5 h-5">
          <Image
            key={i}
            className="y-rating-full-star"
            src={svg_star_complete}
            alt="full star rating"
            width="20"
            height="20"
          />
        </div>
      );
    } else if (i - rating === 0.5) {
      // Half star
      stars.push(
        <div className="y-rating-half-star w-5 h-5">
          <Image
            key={i}
            className="y-rating-half-star"
            src={svg_star_incomplete}
            alt="half star rating"
            width="20"
            height="20"
            unoptimized={true}
          />
        </div>
      );
    }
  }

  return (
    <div className="y-rating flex items-center">{stars}</div>
  );
};

export default Rating;
