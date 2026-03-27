const sponsors = [
  { name: "ישיבת צביה לוד", category: "מייסד" },
  { name: "רשת צביה", category: "ארגוני" },
  { name: "עיריית לוד", category: "עירוני" },
  { name: "FIRST Israel", category: "תחרותי" },
  { name: "Esc BAZ", category: "טכנולוגי" },
  { name: "Rothstein", category: "STEM" },
  { name: "Ophir", category: "תקשורת" },
];

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="section-padding"
      style={{ backgroundColor: "var(--light)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--accent)", letterSpacing: "0.15em" }}
          >
            שותפים
          </p>
          <h2 className="text-4xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
            השותפים שלנו
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
            אנחנו מודים לשותפים ולתומכים שמאפשרים לנו לפרוח. ביחד, אנחנו בונים את עתיד הטכנולוגיה בלוד.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-14">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="bg-white rounded-lg border p-5 text-center"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="text-xs font-semibold uppercase tracking-wide mb-2"
                style={{ color: "var(--accent)" }}
              >
                {sponsor.category}
              </div>
              <div className="font-bold text-base" style={{ color: "var(--foreground)" }}>
                {sponsor.name}
              </div>
            </div>
          ))}
        </div>

        <div
          className="rounded-lg border p-8 text-center"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--background)" }}
        >
          <h3 className="text-xl font-bold mb-3" style={{ color: "var(--foreground)" }}>
            רוצים לתמוך בנו?
          </h3>
          <p className="text-base mb-6 max-w-lg mx-auto" style={{ color: "var(--text-muted)" }}>
            השותפות שלכם מאפשרת לנו להמשיך ולפתח את הדור הבא של מהנדסים ויזמים טכנולוגיים בלוד. נשמח לשמוע מכם.
          </p>
          <a
            href="mailto:[כתובת-מייל]"
            className="btn-accent inline-block px-8 py-3 font-semibold rounded"
          >
            צרו קשר
          </a>
        </div>
      </div>
    </section>
  );
}
