export const WhatYoullLearn = ({ items }) => {
  return (
    <div className="bg-white rounded-2xl border border-[#E1E1E1] p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-900">
        What you'll learn
      </h2>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-primary font-medium mt-1">•</span>
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
