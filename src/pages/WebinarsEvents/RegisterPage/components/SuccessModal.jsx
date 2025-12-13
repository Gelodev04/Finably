import { Check, Calendar, ArrowUpRight } from "lucide-react";
import { Button } from "../../../../components/common";

export const SuccessModal = ({ isOpen, onClose, webinar }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-xl w-full p-8  relative">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <Check className="w-8 h-8 text-green-600" strokeWidth={3} />
          </div>
        </div>

        {/* Success Heading */}
        <h2 className="text-3xl md:text-4xl font-medium text-center mb-4 ">
          Success!
        </h2>

        {/* Thank You Message */}
        <p className="text-lg md:text-xl text-center mb-8 ">
          Thank you for registering!
        </p>

        {/* You're all set for */}
        <p className="text-base md:text-lg text-center mb-6  font-medium">
          You're all set for:
        </p>

        {/* Info Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
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
        </div>

        {/* Confirmation Email Message */}
        <p className="text-sm md:text-base text-center mb-8 text-gray-500 leading-relaxed">
          A confirmation email has been sent to your inbox. You'll also get a
          reminder 24h before the session starts.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between">
          <Button variant="outline" className=" py-3" onClick={onClose}>
            Back
          </Button>
          <a
            href="#"
            className="flex items-center justify-center gap-2 text-primary hover:text-primary-600  font-medium "
          >
            Add To Calendar
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};
