import "bootstrap/dist/css/bootstrap.min.css";
import ScrollEffects from "@/components/layout/ScrollEffects";
import "./globals.css";
import PageLoader from "@/components/layout/PageLoader";
import FloatingContact from "@/components/FloatingContact/FloatingContact";

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
        <PageLoader />
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}
