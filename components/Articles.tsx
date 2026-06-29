const articles = [
  {
    title: "The Times They Are A-Changin'",
    date: "Apr 2026",
    readTime: "7 min",
    slug: "/writing/times-they-are-a-changin",
    live: true,
  },
  {
    title: "I'm Looking Through You",
    date: "Feb 2026",
    readTime: "8 min",
    slug: "/writing/im-looking-through-you",
    live: true,
  },
];

export default function Articles() {
  return (
    <section id="writing" className="bg-surface border-t border-edge py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">

        <p className="mt-5 text-[22px] font-bold text-ink leading-[140%] max-w-[640px]" style={{ fontFamily: "ThermalRegular", fontWeight: 400 }}>
          Ramblin' man.
        </p>
        <p className="mt-3 text-[14px] text-mid leading-[160%] max-w-[480px]">
          Every now and again I write about my observations and experiences.
        </p>

        <div className="mt-12">
          {articles.map((a, i) => (
            <a
              key={i}
              href={a.live ? a.slug : undefined}
              className={`flex items-center justify-between py-5 border-t border-edge transition-opacity duration-200 ${
                a.live ? "hover:opacity-60 cursor-pointer" : "cursor-default"
              }`}
            >
              <span className="text-[18px] font-semibold text-ink" style={{ fontFamily: "ThermalRegular", fontWeight: 400 }}>
                {a.title}
              </span>
              <span className="text-[13px] text-muted shrink-0 ml-8">
                {a.date}&nbsp;&nbsp;·&nbsp;&nbsp;{a.readTime} read
              </span>
            </a>
          ))}
          <div className="border-t border-edge" />
        </div>


      </div>
    </section>
  );
}
