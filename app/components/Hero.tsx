export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: "var(--dark)" }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p
          className="text-sm font-semibold uppercase tracking-widest mb-4"
          style={{ color: "var(--accent)", letterSpacing: "0.2em" }}
        >
          קבוצת רובוטיקה - לוד
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          EXODUS
          <span className="block text-3xl md:text-4xl font-light text-gray-400 mt-2">
            11480
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
          חממה למצוינות טכנולוגית בלוד
        </p>

        <p className="text-base text-gray-500 mb-12 max-w-xl mx-auto">
          ישיבת צביה לוד - FIRST Robotics Competition
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#about"
            className="btn-accent px-8 py-3 font-semibold rounded"
          >
            קראו עלינו
          </a>
          <a
            href="#sponsors"
            className="px-8 py-3 text-gray-300 font-semibold rounded border border-gray-600 hover:border-gray-400 hover:text-white transition-colors duration-200"
          >
            הצטרפו אלינו
          </a>
        </div>
      </div>
    </section>
  );
}
