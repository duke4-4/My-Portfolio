import { socialLinks } from "@/lib/data";
import { asset } from "@/lib/asset";

export default function Footer() {
  return (
    <footer role="contentinfo" className="py-16 text-center">
      <div className="mx-auto max-w-[1180px] px-6 sm:px-10 md:px-16">
        <ul className="mb-8 flex list-none justify-center gap-6">
          {socialLinks.map((social) => (
            <li key={social.name}>
              <a href={social.url} title={`Link to ${social.name} profile`} target="_blank" rel="noreferrer">
                <img src={asset(social.icon)} alt={social.name} className="h-8 invert transition-transform hover:scale-110" />
              </a>
            </li>
          ))}
        </ul>

        <p className="text-muted">
          &copy; {new Date().getFullYear()} - designed &amp; developed by{" "}
          <span className="text-pink">Duke</span>
        </p>
      </div>
    </footer>
  );
}
