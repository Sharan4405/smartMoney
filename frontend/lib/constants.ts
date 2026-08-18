export const COMPANY = {
  name: "Smart Money Consultancy Pvt. Ltd.",
  shortName: "Smart Money",
  director: "Sandeep Kumar Jain",
  tagline: "Smart Advice. Secure Future.",
  phone: "+91 98280 11802",
  phoneHref: "tel:+919828011802",
  instagramUrl: "https://www.instagram.com/smart_moneyconsultancy",
  facebookUrl: "https://www.facebook.com/Smartmoneyconsultancy/",
  linkedinUrl: "https://www.linkedin.com/in/smart-money-consultancy/",
  address: {
    line1: "3rd Floor, E-2 Amrapali Plaza",
    line2: "Amrapali Circle, Vaishali Nagar",
    line3: "Jaipur, Rajasthan 302021",
  },
  disclaimer:
    "Mutual Fund investments are subject to market risks, read all scheme related documents carefully.",
  insuranceDisclaimer:
    "Insurance is the subject matter of solicitation. Read policy wording carefully before concluding a sale.",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
] as const;
