export const SegmentedControl = ({
  options,
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="inline-flex rounded-full border border-gray-300 bg-white p-1 shadow-sm">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              value === option.value
                ? "bg-blue-50 text-primary shadow-sm"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};
