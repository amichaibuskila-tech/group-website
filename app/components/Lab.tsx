const pillars = [
  {
    number: "01",
    title: "מעבדה מכנית",
    description:
      "עיצוב CAD בסוליידוורקס, ייצור CNC, קינמטיקה חכמה ומנגנונים מודולריים לתחלופה מהירה בשטח.",
  },
  {
    number: "02",
    title: "מערכות תוכנה",
    description:
      "קוד אוטונומי בג'אווה, שליטת תנועה PID ובינה מלאכותית עם Limelight לזיהוי עצמים בזמן אמת.",
  },
  {
    number: "03",
    title: "אסטרטגיה ותפעול",
    description:
      "סיור מודיעיני, איסוף נתונים, קבלת החלטות מבוססת-נתונים וניתוח משחק תחרותי.",
  },
  {
    number: "04",
    title: "השפעה קהילתית",
    description:
      "קידום חינוך STEM בלוד, שיתופי פעולה עם הרשות המקומית ועם שותפים מהמגזר הפרטי.",
  },
];

export default function Lab() {
  return (
    <section
      id="lab"
      className="section-padding"
      style={{ backgroundColor: "var(--light)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--accent)", letterSpacing: "0.15em" }}
          >
            הצוות
          </p>
          <h2 className="text-4xl font-bold" style={{ color: "var(--foreground)" }}>
            ארבעה עמודי תווך
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="bg-white rounded-lg p-6 border"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="text-3xl font-black mb-4 leading-none"
                style={{ color: "var(--accent)" }}
              >
                {pillar.number}
              </div>
              <h3
                className="font-bold text-lg mb-3"
                style={{ color: "var(--foreground)" }}
              >
                {pillar.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
