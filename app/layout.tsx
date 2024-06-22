import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000/"),

	title: 'Meet Harsoda',
	authors: {
		name: "Meet Harsoda",
	},

	description:
		"Based in India, I'm a Fullstack developer passionate about building a modern web application that users love.",
	openGraph: {
		title: "Meet Harsoda",
		description:
			"Based in India, I'm a Fullstack developer passionate about building a modern web application that users love.",
		url: "http://localhost:3000/",
		siteName: "Meet Harsoda",
		images: "/portfolio.png",
		type: "website",
	},
	keywords: ["portfolio", "Meet","harsoda", "nextjs","iiitsurat","IIITSurat"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
