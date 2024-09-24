import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Script from 'next/script';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: 'Terreiro de Jagun',
    description: 'Terreiro de camdonblé',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <head>
                <Script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=G-JSX7L0BTYV`}
                />
                <Script id="my-custom-script">
                    {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-JSX7L0BTYV');
        `}
                </Script>
                <Script
                    id="my-custom-google-analicts"
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-JSX7L0BTYV"
                ></Script>
                <Script id="my-custom-google-analict">
                    {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-JSX7L0BTYV');`}
                </Script>
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
