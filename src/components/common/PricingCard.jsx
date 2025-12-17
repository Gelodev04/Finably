import { Button } from "./Button";
import { Check, ArrowUpRight } from "lucide-react";

export const PricingCard = ({
  name,
  subtitle,
  price,
  monthlyPrice,
  yearlyPrice,
  period,
  billingPeriod,
  features = [],
  buttonText = "Get Started",
  learnMore = true,
  highlighted = false,
  isPopular = false,
  badge,
  className = "",
  href,
}) => {
  // Determine if this card should be highlighted
  const isHighlighted = highlighted || isPopular;

  // Calculate display price
  let displayPrice;
  let displayPeriod;

  if (monthlyPrice !== undefined && yearlyPrice !== undefined) {
    // New format with monthly/yearly pricing
    displayPrice = billingPeriod === "yearly" ? yearlyPrice : monthlyPrice;
    displayPeriod = billingPeriod === "yearly" ? "yr" : "mo";
  } else {
    // Old format with single price
    displayPrice = price;
    displayPeriod = period || "mo";
  }

  return (
    <div
      className={`relative rounded-2xl p-6 md:p-8 border flex flex-col ${
        isHighlighted
          ? "bg-primary text-white min-h-[600px] md:min-h-[600px]"
          : "bg-white border-[#E0E0E0] self-center"
      } ${className}`}
    >
      {/* Badge for highlighted plan */}
      {badge && (
        <div className="absolute -top-8 -right-16 size-34 overflow-hidden">
          <img src={badge} alt="Badge" className="w-full h-full object-cover" />
        </div>
      )}

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`text-sm font-medium mb-2 ${
            isHighlighted ? "text-blue-200" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}

      {/* Plan Name */}
      <h3
        className={`text-xl md:text-2xl font-medium mb-2 ${
          isHighlighted ? "text-white" : "text-gray-900"
        }`}
      >
        {name}
      </h3>

      {/* Price */}
      <div className="mt-10 mb-6">
        <span
          className={`text-4xl md:text-5xl font-medium ${
            isHighlighted ? "text-white" : "text-gray-900"
          }`}
        >
          ${displayPrice}
        </span>
        <span
          className={`text-lg ml-1 ${
            isHighlighted ? "text-blue-200" : "text-gray-600"
          }`}
        >
          /{displayPeriod}
        </span>
      </div>

      {/* Get Started Button */}
      <Button
        type="ani1"
        variant={isHighlighted ? "outline" : "primary"}
        className={`w-full py-3 rounded-lg mb-6 ${
          isHighlighted
            ? "bg-white text-primary  hover:text-white border-white"
            : ""
        }`}
        href={href}
      >
        {buttonText}
      </Button>

      {/* Features List */}
      <ul className="space-y-3 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <Check
              size={20}
              className={
                isHighlighted ? "text-white shrink-0" : "text-gray-600 shrink-0"
              }
            />
            <span className={isHighlighted ? "text-white" : ""}>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Learn More Link */}
      {learnMore && (
        <a
          href="#"
          className={`flex items-center gap-2 mt-auto ${
            isHighlighted
              ? "text-blue-200 hover:text-white"
              : "text-blue-600 hover:text-blue-700"
          }`}
        >
          Learn More
          <ArrowUpRight size={16} />
        </a>
      )}
    </div>
  );
};
