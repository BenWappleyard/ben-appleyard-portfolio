export default function NextArticle({ title, slug, date, readTime }: {
  title: string;
  slug: string;
  date: string;
  readTime: string;
}) {
  return (
    <div className="mt-24 pt-8 border-t border-edge">
      <p className="text-[12px] font-medium text-muted mb-4">My other articles</p>
      <a
        href={slug}
        className="group flex items-start justify-between gap-8 hover:opacity-60 transition-opacity duration-200"
      >
        <span
          className="text-[22px] text-ink leading-[130%]"
          style={{ fontFamily: "ThermalRegular", fontWeight: 400 }}
        >
          {title}
        </span>
        <span className="text-[13px] text-muted shrink-0 mt-1">{date}&nbsp;&nbsp;·&nbsp;&nbsp;{readTime} read</span>
      </a>
    </div>
  );
}
