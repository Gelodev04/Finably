export const LabelPill = ({ children, className = "" }) => {
  if (!children) return null;

  return (
    <div className="flex justify-center">
      <span
        className={`px-4 py-3 md:px-7 md:py-5 bg-white rounded-full text-base md:text-xl shadow-xl border border-[#E1E1E1] ${className}`}
      >
        {children}
      </span>
    </div>
  );
};
