import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { site } from "@/lib/content";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  category: "portfolio",
  applicationName: site.name,
  referrer: "origin-when-cross-origin",
  keywords: [
    "Arjun L",
    "ArjunL",
    "arjunl",
    "Arjun L portfolio",
    "Arjun L software engineer",
    "Arjun L Lyptron",
    "iamarjun23",
    "software engineer",
    "backend engineer",
    "full-stack developer",
    "RAG",
    "LangChain",
    "Next.js",
    "Bangalore",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  openGraph: {
    type: "profile",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    creator: "@iamarjun23",
  },
  // Set NEXT_PUBLIC_GOOGLE_VERIFICATION to the Search Console token to verify ownership.
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark light",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: ["ArjunL", "arjunl", "iamarjun23"],
  image: `${site.url}${site.photo}`,
  jobTitle: site.role,
  description: site.description,
  url: site.url,
  email: site.email,
  sameAs: [site.github, site.linkedin, site.company.url],
  address: { "@type": "PostalAddress", addressLocality: "Bangalore", addressCountry: "IN" },
  alumniOf: { "@type": "CollegeOrUniversity", name: "MSRUAS" },
  worksFor: { "@type": "Organization", name: site.company.name, url: site.company.url },
  knowsAbout: ["Backend engineering", "Retrieval-augmented generation", "Node.js", "Python", "React", "Flutter"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  alternateName: ["ArjunL", "arjunl"],
  url: site.url,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        {/* Apply the saved theme before first paint so there is no flash. */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:border focus:border-brand focus:bg-s2 focus:px-4 focus:py-2 focus:text-sm"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify([personSchema, websiteSchema]) }}
        />
      </body>
    </html>
  );
}
