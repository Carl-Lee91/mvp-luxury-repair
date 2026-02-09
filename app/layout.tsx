import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/src/widgets/Navbar";
import { Footer } from "@/src/widgets/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Luxury Repair - 명품 수선 플랫폼",
  description: "전문가의 손길로 소중한 명품을 새것처럼 되돌려드립니다. 무료 견적 상담 24시간 이내 제공.",
  keywords: ["명품 수선", "럭셔리 리페어", "가방 수선", "시계 수리", "주얼리 복원"],
  openGraph: {
    title: "Luxury Repair - 명품 수선 플랫폼",
    description: "전문가의 손길로 소중한 명품을 새것처럼 되돌려드립니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
