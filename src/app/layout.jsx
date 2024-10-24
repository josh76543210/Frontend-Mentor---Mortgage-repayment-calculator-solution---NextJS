import "./globals.css";

export const metadata = {
  title: "Frontend Mentor | Mortgage Repayment Calculator",
  description: "Calculate your morgage payments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen">{children}</body>
    </html>
  );
}
