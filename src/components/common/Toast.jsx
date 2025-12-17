import { useEffect } from "react";
import { CheckCircle, XCircle, X } from "lucide-react";

export const Toast = ({
  message,
  type = "success",
  onClose,
  duration = 5000,
}) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const bgColor =
    type === "success"
      ? "bg-green-50 border-green-200"
      : "bg-red-50 border-red-200";
  const textColor = type === "success" ? "text-green-800" : "text-red-800";
  const iconColor = type === "success" ? "text-green-600" : "text-red-600";
  const Icon = type === "success" ? CheckCircle : XCircle;

  return (
    <div
      className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-lg border shadow-lg ${bgColor} ${textColor} min-w-[300px] max-w-md animate-slide-in`}
    >
      <Icon className={`${iconColor} flex-shrink-0`} size={20} />
      <p className="flex-1 text-sm font-medium">{message}</p>
      <button
        onClick={onClose}
        className={`${textColor} hover:opacity-70 transition-opacity flex-shrink-0`}
        aria-label="Close notification"
      >
        <X size={18} />
      </button>
    </div>
  );
};

