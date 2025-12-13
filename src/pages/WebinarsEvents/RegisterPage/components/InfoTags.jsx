import { Calendar, Circle } from "lucide-react";

export const InfoTags = ({ webinar }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mt-8">
      {/* Date/Time Tag */}
      <div className="inline-flex items-center gap-2 bg-[#DBEFFF] px-4 py-2 rounded-lg">
        <Calendar color="#064ea2" size={18} />
        <span className="text-sm font-medium text-gray-900">
          {webinar.dateTime}
        </span>
      </div>

      {/* Platform Tag */}
      <div className="inline-flex items-center gap-2 bg-[#DBEFFF] px-4 py-2 rounded-lg">
        <img src="/icons/zoom.svg" alt="zoom" className="w-6 h-6" />
        <span className="text-sm font-medium text-gray-900">
          {webinar.platform}
        </span>
      </div>

      {/* Recording Available Tag */}
      {webinar.recordingAvailable && (
        <div className="inline-flex items-center gap-2 bg-[#DBEFFF] px-4 py-2 rounded-lg">
          <Circle color="#064ea2" size={18} fill="#064ea2" />
          <span className="text-sm font-medium text-gray-900">
            Recording available
          </span>
        </div>
      )}
    </div>
  );
};
