export const Container = ({ children, className = "", maxWidth }) => (
  <div
    className={`container mx-auto px-4 ${
      maxWidth ? `max-w-${maxWidth}` : ""
    } ${className}`}
  >
    {children}
  </div>
);
