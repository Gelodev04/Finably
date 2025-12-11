export const benefits = [
  {
    id: 1,
    title: "Save time",
    description: "Automate budgets, reconciliation, and reports in minutes.",
    icon: "/icons/zap.svg",
  },
  {
    id: 2,
    title: "Stay compliant",
    description: "Export audit-ready reports and meet policy requirements.",
    icon: "/icons/shield.svg",
  },
  {
    id: 3,
    title: "Full visibility",
    description: "See cashflow, budgets, and spend by team in real time.",
    icon: "/icons/pie.svg",
  },
];

export const pricingPlans = [
  {
    id: 1,
    name: "Basic plan",
    monthlyPrice: 5,
    yearlyPrice: 51, // $5 * 12 * 0.85 = $51 (15% off)
    features: [
      "Feature 1",
      "Feature 1",
      "Feature 1",
      "Feature 1",
      "Feature 1",
      "Feature 1",
      "Feature 1",
    ],
    isPopular: false,
  },
  {
    id: 2,
    name: "Pro plan",
    subtitle: "Perfect to start",
    monthlyPrice: 9,
    yearlyPrice: 92, // $9 * 12 * 0.85 = $92 (15% off)
    features: [
      "Feature 1",
      "Feature 1",
      "Feature 1",
      "Feature 1",
      "Feature 1",
      "Feature 1",
      "Feature 1",
    ],
    isPopular: true,
  },
  {
    id: 3,
    name: "Advanced plan",
    monthlyPrice: 15,
    yearlyPrice: 153, // $15 * 12 * 0.85 = $153 (15% off)
    features: [
      "Feature 1",
      "Feature 1",
      "Feature 1",
      "Feature 1",
      "Feature 1",
      "Feature 1",
      "Feature 1",
    ],
    isPopular: false,
  },
];

export const comparisonFeatures = [
  {
    feature: "Bank connections",
    basic: "1",
    pro: "5",
    advanced: "Unlimited",
  },
  {
    feature: "Reports & Dashboard",
    basic: "Basic",
    pro: "Pro",
    advanced: "Custom",
  },
  {
    feature: "Audit tools",
    basic: "-",
    pro: "-",
    advanced: "✓",
  },
];

export const faqs = [
  {
    id: 1,
    question: "Can I cancel anytime?",
    answer:
      "Yes. You can cancel from your account settings. Your plan remains active until the end of the billing period.",
  },
  {
    id: 2,
    question: "Is there a free trial?",
    answer: "Yes, we offer a 14-day free trial for all plans.",
  },
  {
    id: 3,
    question: "Can I switch plans later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings.",
  },
  {
    id: 4,
    question: "Do you offer discounts for nonprofit or students?",
    answer:
      "Yes, we offer special discounts for nonprofits and students. Please contact us for more information.",
  },
];
