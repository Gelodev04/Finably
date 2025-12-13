export const Speakers = ({ speakers }) => {
  return (
    <div className="bg-white rounded-2xl border border-[#E1E1E1] p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-900">
        Speakers
      </h2>
      <div className="flex justify-between gap-6">
        {speakers.map((speaker) => (
          <div key={speaker.id} className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden shrink-0">
              <img
                src={speaker.avatar}
                alt={speaker.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.classList.add(
                    "bg-gradient-to-br",
                    "from-blue-400",
                    "to-purple-500"
                  );
                }}
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                {speaker.name}
              </h3>
              <p className="text-sm">{speaker.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
