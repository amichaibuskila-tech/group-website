const members = [
  { name: "עמיחי בוסקילה", role: "[תפקיד]" },
  { name: "יאיר גולן", role: "[תפקיד]" },
  { name: "לביא ארנון", role: "[תפקיד]" },
  { name: "אוריה ניידורף", role: "[תפקיד]" },
];

export default function Members() {
  return (
    <section
      id="members"
      className="section-padding"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--accent)", letterSpacing: "0.15em" }}
          >
            חברי הצוות
          </p>
          <h2 className="text-4xl font-bold" style={{ color: "var(--foreground)" }}>
            האנשים מאחורי הרובוט
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {members.map((member) => (
            <div
              key={member.name}
              className="rounded-lg border p-6 text-center"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white"
                style={{ backgroundColor: "var(--dark)" }}
              >
                {member.name.charAt(0)}
              </div>
              <h3 className="font-bold text-base mb-1" style={{ color: "var(--foreground)" }}>
                {member.name}
              </h3>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                {member.role}
              </p>
            </div>
          ))}
        </div>

        <div
          className="rounded-lg border p-6 text-center"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--light)" }}
        >
          <p className="text-base font-medium mb-1" style={{ color: "var(--foreground)" }}>
            מעוניינים להצטרף לצוות?
          </p>
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            אנחנו תמיד מחפשים תלמידים עם תשוקה לטכנולוגיה ורצון לגדול. צרו קשר ונשמח לספר עוד.
          </p>
        </div>
      </div>
    </section>
  );
}
