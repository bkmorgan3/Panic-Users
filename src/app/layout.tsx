import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Panic",
  description: "our users app",
  other: {
    name: 'google-site-verification',
    content: 'google4a2b699c508ec1af.html'
  }
};

const links = [
  {href: '/', label: 'Home'},
  {href: '/users', label: 'Users'}
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="pqb_W89tefyL7koBON2BM_XWbZZJM1FSTUTwcpb-VFw" />
      </head>
      <body className={inter.className}>
        <header>
          <nav>
            <ul className="bg-black text-white flex justify-end">
              {links.map(link => (
                <li className="mr-4">
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <div>
          {children}
        </div>    
      </body>
    </html>
  );
}
