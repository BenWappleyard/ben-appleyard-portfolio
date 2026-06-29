const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ben-appleyard/" },
  { label: "GitHub", href: "https://github.com/BenWappleyard" },
  { label: "Email", href: "mailto:" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 pt-16 pb-8">

        <div className="flex justify-end pb-12">
          <div className="flex items-center gap-8">
            {socialLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[13px] text-muted hover:text-surface transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-[#222] pt-8">
          <p className="text-[12px] text-[#444]">
            © 2025 Ben Appleyard
          </p>
        </div>

      </div>
    </footer>
  );
}
