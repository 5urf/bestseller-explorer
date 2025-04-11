import "@/styles/globals.css";
import { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: {
    template: "%s | 뉴욕 타임즈 베스트셀러",
    default: "뉴욕 타임즈 베스트셀러",
  },
  description:
    "뉴욕 타임즈에서 선정한 베스트셀러 리스트를 카테고리 별로 볼 수 있는 서비스",
  keywords: [
    "뉴욕 타임즈",
    "베스트셀러",
    "책",
    "도서",
    "추천 도서",
    "베스트셀러 리스트",
  ],
  openGraph: {
    title: "뉴욕 타임즈 베스트셀러",
    description: "뉴욕 타임즈 베스트셀러 리스트를 카테고리 별로 확인하세요",
    type: "website",
  },
  applicationName: "뉴욕 타임즈 베스트셀러",
  creator: "5urf",
  publisher: "5urf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
