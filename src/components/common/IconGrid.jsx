export const IconGrid = ({ items = [] }) => {
  if (!items || items.length === 0) return null;

  const getGridClasses = () => {
    if (items.length === 4) {
      return "grid grid-cols-1 md:grid-cols-2 gap-4";
    } else if (items.length === 3) {
      return "grid grid-cols-1 md:grid-cols-3 gap-4";
    } else {
      return "grid grid-cols-1 md:flex md:flex-wrap md:justify-center gap-4";
    }
  };

  return (
    <div className={getGridClasses()}>
      {items.map((item) => (
        <div
          key={item.id}
          className="space-y-5 border p-8 text-center rounded-xl"
        >
          {item.icon && (
            <img src={item.icon} alt={item.title} className="size-22 mx-auto" />
          )}
          <div className="space-y-1">
            {item.title && (
              <h3 className="text-xl font-medium text-black">{item.title}</h3>
            )}
            {item.description && (
              <p className="text-lg text-gray-600 leading-relaxed">
                {item.description}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
