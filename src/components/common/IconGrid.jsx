export const IconGrid = ({ items = [] }) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="grid md:grid-cols-2 gap-4">
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
