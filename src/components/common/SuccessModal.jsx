import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { Button } from "./Button";

export const SuccessModal = ({ isOpen, onClose, title, message }) => {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (!isOpen) return;

    // Reset countdown when modal opens
    setCountdown(5);

    // Countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          onClose();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>

      {/* Modal container */}
      <div className="relative bg-white rounded-2xl p-8 max-w-xl w-full mx-4 shadow-xl">
        {/* Success icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-green-50 rounded-xl px-8 py-5">
            <Check className="text-green-600" size={36} strokeWidth={2} />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-4">
          {title || "You're on the list!"}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-center mb-6 leading-relaxed">
          {message ||
            "Thanks for applying to the Finably beta. We’ll email you when the next wave opens."}
        </p>

        {/* Close button */}
        <div className="flex justify-center mb-4">
          <Button
            variant="primary"
            type="ani1"
            onClick={onClose}
            className="w-auto!"
          >
            Close
          </Button>
        </div>

        {/* Countdown message */}
        <p className="text-sm text-gray-500 text-center">
          This modal auto-closes in {countdown}s
        </p>
      </div>
    </div>
  );
};
