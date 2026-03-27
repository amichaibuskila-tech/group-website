export default function About() {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: "var(--background)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--accent)", letterSpacing: "0.15em" }}
            >
              אודות
            </p>
            <h2 className="text-4xl font-bold mb-6" style={{ color: "var(--foreground)" }}>
              מי אנחנו
            </h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
              קבוצת אקסודוס 11480 היא קבוצת רובוטיקה מישיבת צביה לוד, המשתתפת בתחרות FIRST Robotics Competition. שמנו, "אקסודוס", מסמל יציאה לדרך חדשה עם שאיפה לשיפור מתמיד - ערך שמנחה אותנו בכל עונה ועונה.
            </p>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}>
              אנחנו משלבים את ערכי ישיבת צביה עם יזמות טכנולוגית, ומפתחים מערכות אוטונומיות מתקדמות תוך טיפוח דור הבא של מהנדסים וטכנולוגים בלוד.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
              המשימה שלנו: להיות חממה למצוינות טכנולוגית - לא רק בזירת התחרות, אלא גם בקהילה שלנו בלוד.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                title: "חדשנות",
                text: "פיתוח פתרונות יצירתיים לאתגרים הנדסיים מורכבים בכל עונת תחרות.",
              },
              {
                title: "שיתוף פעולה",
                text: "עבודת צוות בין תחומי - מכניקה, תוכנה, אסטרטגיה וניהול - כולם יחד.",
              },
              {
                title: "השפעה קהילתית",
                text: "קידום חינוך STEM בלוד ויצירת הזדמנויות לנוער בעיר.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-lg border"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--light)" }}
              >
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
