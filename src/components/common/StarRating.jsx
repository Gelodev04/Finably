import { Star } from "lucide-react";

export const StarRating = ({ rating, className = "" }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {/* Full stars */}
      {Array.from({ length: fullStars }).map((_, index) => (
        <Star
          key={`full-${index}`}
          size={16}
          className="fill-yellow-400 text-yellow-400"
        />
      ))}
      {/* Half star */}
      {hasHalfStar && (
        <div className="relative w-4 h-4">
          <Star
            size={16}
            className="absolute fill-yellow-400 text-yellow-400"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          />
          <Star
            size={16}
            className="absolute fill-gray-300 text-gray-300"
            style={{ clipPath: "inset(0 0 0 50%)" }}
          />
        </div>
      )}
      {/* Empty stars */}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <Star
          key={`empty-${index}`}
          size={16}
          className="fill-gray-300 text-gray-300"
        />
      ))}
    </div>
  );
};
