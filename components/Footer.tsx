// components/Footer.tsx
export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 sm:px-8 lg:px-12">
        <div>
          <p className="font-display text-2xl font-semibold">
            Jabulani Mokoena
          </p>
          <p className="mt-2 text-[#6b7280]">Software &amp; Data Developer</p>
        </div>

        <div className="flex flex-wrap gap-6 text-sm">
          <a href="#" className="transition-colors hover:text-[#0f766e]">
            Resume
          </a>
          <a href="https://github.com/Jabutec" className="transition-colors hover:text-[#0f766e]">
            GitHub ↗
          </a>
          <a href="https://www.linkedin.com/in/jabulani-mokoena/" className="transition-colors hover:text-[#0f766e]">
            LinkedIn ↗
          </a>
          
          <a
            href="mailto:hello@example.com"
            className="transition-colors hover:text-[#0f766e]"
          >
            Contact ↗
          </a>
        </div>
      </div>
    </footer>
  );
}