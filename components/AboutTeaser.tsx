export default function AboutTeaser() {
  return (
    <section id="about" className="bg-surface border-t border-edge py-20 md:py-28">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">

        <span className="text-[11px] font-semibold text-accent tracking-[2.5px]">
          ABOUT
        </span>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Statement */}
          <div>
            <h2 className="text-[38px] md:text-[52px] font-extrabold text-ink leading-[108%] tracking-[-1px]">
              Designer with a<br />
              builder&apos;s instinct<br />
              and strategist&apos;s eye.
            </h2>
            <a
              href="/about"
              className="inline-block mt-10 text-[14px] font-medium text-accent hover:underline underline-offset-4"
            >
              More about me →
            </a>
          </div>

          {/* Bio + photo */}
          <div className="flex gap-8 items-start">
            <p className="text-[16px] text-mid leading-[168%] flex-1">
              I&apos;m passionate about combining meaningful,
              meticulous design with intelligent technology. I create and
              nurture high-performing environments that solve problems, drive
              business value, delight people, generate growth and influence
              culture. I believe in humility and curiosity but take pride in
              responsibility and intent. I&apos;ve enjoyed the wins and learned from
              the failures. Get in touch if you&apos;d like to chat.
            </p>
            <div className="hidden md:block w-[180px] shrink-0 aspect-[3/4] bg-surface-alt rounded-lg" />
          </div>

        </div>
      </div>
    </section>
  );
}
