import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${mono.className} text-white`}>
        {children}
      </body>
    </html>
  );
}
