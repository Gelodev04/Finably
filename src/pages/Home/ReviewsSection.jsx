import { useEffect, useRef, useState } from "react";
import { Section, SectionHeader, StarRating } from "../../components/common";
import { reviews } from "./data/reviews";

export const ReviewsSection = () => {
  const topRowRef = useRef(null);
  const bottomRowRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentRow, setCurrentRow] = useState(null);

  useEffect(() => {
    if (topRowRef.current) {
      const scrollWidth = topRowRef.current.scrollWidth;
      const clientWidth = topRowRef.current.clientWidth;
      const scrollPosition = (scrollWidth - clientWidth) / 2;
      topRowRef.current.scrollLeft = scrollPosition;
    }

    if (bottomRowRef.current) {
      const cardWidth = 400;
      const scrollAmount = cardWidth * 0.3;
      bottomRowRef.current.scrollLeft = scrollAmount;
    }
  }, []);

  const handleMouseDown = (e, rowRef) => {
    setIsDragging(true);
    setCurrentRow(rowRef);
    setStartX(e.pageX - rowRef.current.offsetLeft);
    setScrollLeft(rowRef.current.scrollLeft);
    rowRef.current.style.cursor = "grabbing";
    rowRef.current.style.userSelect = "none";
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !currentRow?.current) return;
    e.preventDefault();
    const x = e.pageX - currentRow.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    currentRow.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    if (currentRow?.current) {
      currentRow.current.style.cursor = "grab";
      currentRow.current.style.userSelect = "auto";
    }
    setIsDragging(false);
    setCurrentRow(null);
  };

  const handleMouseLeave = () => {
    if (currentRow?.current) {
      currentRow.current.style.cursor = "grab";
      currentRow.current.style.userSelect = "auto";
    }
    setIsDragging(false);
    setCurrentRow(null);
  };

  // Split reviews into two rows
  const topRowReviews = reviews.filter((_, index) => index < 4);
  const bottomRowReviews = reviews.filter((_, index) => index >= 4);

  // Review Card Component
  const ReviewCard = ({ review }) => (
    <div className="shrink-0 w-[350px] md:w-[400px] min-h-[180px] bg-white rounded-2xl p-4 border border-[#E1E1E1] cursor-grab">
      {/* Reviewer Info */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden shrink-0">
          <img
            src={review.avatar}
            alt={review.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.classList.add(
                "bg-gradient-to-br",
                "from-blue-400",
                "to-purple-500"
              );
            }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 truncate">
            {review.name}
          </h4>
          <StarRating rating={review.rating} className="mt-1" />
        </div>
      </div>

      {/* Testimonial */}
      <p className="leading-relaxed text-sm">{review.testimonial}</p>
    </div>
  );

  return (
    <Section noBorder noBg className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader label="Reviews" heading="Trusted by people like you" />

        {/* Reviews Carousel - 2 Rows, Scrollable */}
        <div className="space-y-5 max-w-[1200px] mx-auto mt-15">
          {/* Top Row */}
          <div
            ref={topRowRef}
            className="overflow-x-auto -mx-4 px-4 scrollbar-hide cursor-grab active:cursor-grabbing"
            onMouseDown={(e) => handleMouseDown(e, topRowRef)}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex gap-5">
              {topRowReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>

          {/* Bottom Row */}
          <div
            ref={bottomRowRef}
            className="overflow-x-auto -mx-4 px-4 scrollbar-hide cursor-grab active:cursor-grabbing"
            onMouseDown={(e) => handleMouseDown(e, bottomRowRef)}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex gap-5">
              {bottomRowReviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
