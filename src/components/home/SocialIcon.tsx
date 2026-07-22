import Link from "next/link";
import { socialLink } from "@/data/iocn";


const SocialIcon = () => {
  return (
    <div className="social-row">
      {socialLink.map((social) => (
        <Link
          target="_blank"
          key={social.label}
          href={social.href}
          rel="noopener noreferrer"
          aria-label={social.label}
          className="social-icon"
        >
          {typeof social.icon === "string" ? (
            social.icon === "dribbble" ? (
              <DribbbleGlyph />
            ) : (
              <BehanceGlyph />
            )
          ) : (
            social.icon
          )}
        </Link>
      ))}
    </div>
  );
};

export default SocialIcon;

function DribbbleGlyph() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="9.25"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M4.2 9.2c2.6.9 5.7 1.3 8.9 1 3-.3 5.6-1.2 7.5-2.3M3.3 14.7c4.8-1.1 10.6-.6 14.8 1.6M9.5 3.1c2.6 3.4 4.3 8.4 4.5 13.8"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function BehanceGlyph() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 6h6.2c2.9 0 4.4 1.3 4.4 3.3 0 1.4-.7 2.3-2 2.8 1.7.4 2.7 1.6 2.7 3.3 0 2.3-1.7 3.6-4.7 3.6H2V6Zm4.1 5.1h1.6c1.2 0 1.9-.5 1.9-1.5 0-.9-.7-1.4-1.9-1.4H6.1v2.9Zm0 5.6h1.9c1.4 0 2.1-.6 2.1-1.6 0-1-.7-1.6-2.1-1.6H6.1v3.2ZM14.5 9.4h6.7v1.5h-6.7V9.4ZM22 15.1c0 2.6-1.9 4.2-4.6 4.2-2.9 0-4.8-1.9-4.8-4.9 0-2.9 1.9-4.9 4.7-4.9 2.9 0 4.6 2 4.6 5v.5h-7c.1 1.5 1 2.4 2.5 2.4 1.1 0 1.8-.4 2.1-1.2H22Zm-6.9-1.8h4.5c-.1-1.2-.9-2-2.2-2-1.3 0-2.1.8-2.3 2Z"
        fill="currentColor"
      />
    </svg>
  );
}
