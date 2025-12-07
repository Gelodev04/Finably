import { Section, SectionHeader, StarRating } from "../../components/common";
import { reviews } from "./data/reviews";

export const ReviewsSection = () => {
  return (
    <Section noBorder className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <SectionHeader label="Reviews" heading="Trusted by people like you" />

        {/* Reviews Carousel - 2 Rows, Scrollable */}
        <div className="space-y-6 max-w-[1200px] mx-auto">
          {/* Top Row */}
          <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-6 ">
              {reviews.slice(0, 4).map((review) => (
                <div
                  key={review.id}
                  className="shrink-0 w-[350px] md:w-[400px] bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
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
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {review.testimonial}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row */}
          <div className="overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-6 min-w-max">
              {reviews.slice(4).map((review) => (
                <div
                  key={review.id}
                  className="shrink-0 w-[350px] md:w-[400px] bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
                >
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
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {review.testimonial}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
