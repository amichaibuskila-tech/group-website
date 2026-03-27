export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--dark)" }}>
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">
              Exodus <span style={{ color: "var(--accent)" }}>11480</span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              חממה למצוינות טכנולוגית בלוד.
              <br />
              ישיבת צביה לוד - FIRST Robotics Competition.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
              ניווט
            </h4>
            <ul className="space-y-2">
              {[
                { href: "#about", label: "אודות" },
                { href: "#lab", label: "הצוות" },
                { href: "#members", label: "חברי הצוות" },
                { href: "#achievements", label: "הישגים" },
                { href: "#sponsors", label: "שותפים" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
              עקבו אחרינו
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.instagram.com/exodus11480frc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Instagram - @exodus11480frc
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/exodus-%D7%9E%D7%A6%D7%91%D7%99%D7%94-%D7%90%D7%9C%D7%99%D7%A9%D7%99%D7%91-%D7%9C%D7%95%D7%93-62a251395/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: "#1e293b" }}
        >
          <p className="text-xs text-gray-500">
            2025 Exodus 11480. כל הזכויות שמורות.
          </p>
          <p className="text-xs text-gray-600">
            לוד, ישראל
          </p>
        </div>
      </div>
    </footer>
  );
}
