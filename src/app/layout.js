import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "School Management System",
  description: "Simple School Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}