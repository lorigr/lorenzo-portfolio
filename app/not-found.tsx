import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-snippet": 0,
      "max-image-preview": "none",
      "max-video-preview": 0,
    },
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-lg text-center space-y-4">
        <p className="font-mono text-xs tracking-widest text-white/50 uppercase">
          Error 404
        </p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Page not found
        </h1>
        <p className="text-white/60 leading-relaxed">
          The URL you requested does not exist on this portfolio.
        </p>
      </div>
    </main>
  );
}
