const stats = [
  { value: "[מספר]", label: "עונות תחרות" },
  { value: "[מספר]", label: "אירועים" },
  { value: "[מספר]", label: "פרסים" },
  { value: "[מספר]", label: "חברי צוות" },
];

const awards = [
  "[פרס / הישג - יש להוסיף]",
  "[פרס / הישג - יש להוסיף]",
  "[פרס / הישג - יש להוסיף]",
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section-padding"
      style={{ backgroundColor: "var(--dark)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--accent)", letterSpacing: "0.15em" }}
          >
            הישגים
          </p>
          <h2 className="text-4xl font-bold text-white">המספרים מדברים</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-5xl font-black mb-2"
                style={{ color: "var(--accent)" }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            פרסים ואירועים בולטים
          </h3>
          <ul className="space-y-3">
            {awards.map((award, i) => (
              <li
                key={i}
                className="flex items-start gap-3 p-4 rounded-lg"
                style={{ backgroundColor: "var(--dark-secondary)" }}
              >
                <span
                  className="text-xs font-bold mt-0.5 shrink-0"
                  style={{ color: "var(--accent)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-gray-300">{award}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
