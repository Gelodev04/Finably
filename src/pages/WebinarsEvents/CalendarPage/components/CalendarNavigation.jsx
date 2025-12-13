import { ChevronLeft, ChevronRight } from "lucide-react";

export const CalendarNavigation = ({
  onPrevMonth,
  onNextMonth,
  onCurrentMonth,
  currentDate,
}) => {
  const today = new Date();
  const isCurrentMonth =
    currentDate.getMonth() === today.getMonth() &&
    currentDate.getFullYear() === today.getFullYear();

  const displayText = isCurrentMonth
    ? "Current"
    : currentDate.toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      });

  return (
    <div className="flex items-center justify-center gap-4 mb-8">
      <button
        onClick={onPrevMonth}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Previous month"
      >
        <ChevronLeft size={24} className="text-gray-700" />
      </button>
      <div className="px-6 py-2 bg-white border border-[#E1E1E1] rounded-lg text-sm font-medium text-gray-700">
        {displayText}
      </div>
      <button
        onClick={onNextMonth}
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Next month"
      >
        <ChevronRight size={24} className="text-gray-700" />
      </button>
    </div>
  );
};
