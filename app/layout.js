import "bootstrap/dist/css/bootstrap.min.css";
import ScrollEffects from "@/components/layout/ScrollEffects";
import "./globals.css";

export const metadata = {
  title: "Jaywant Group | One Group Endless Possibilities",
  description:
    "Explore Jaywant Group's real estate, industrial, residential and commercial developments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrollEffects />
        {children}
      </body>
    </html>
  );
}
