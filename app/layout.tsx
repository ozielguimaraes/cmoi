import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Centro Médico Odontológico Integrado | Porto Velho",
  description:
    "Odontologia e Dermatologia premium em Porto Velho. Implantes, próteses, canal, ortodontia. Atendimento humanizado, profissionais experientes.",
  keywords: [
    "dentista Porto Velho",
    "clínica odontológica Porto Velho",
    "implante dentário Porto Velho",
    "dermatologista Porto Velho",
  ],
  metadataBase: new URL("https://cmoi-porto-velho.com"),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://cmoi-porto-velho.com",
    title: "Centro Médico Odontológico Integrado | Porto Velho",
    description: "Odontologia e Dermatologia premium em Porto Velho",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://cmoi-porto-velho.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              name: "Centro Médico Odontológico Integrado",
              url: "https://cmoi-porto-velho.com",
              telephone: "+55 69 3222-4886",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Porto Velho",
                addressRegion: "RO",
                addressCountry: "BR",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
