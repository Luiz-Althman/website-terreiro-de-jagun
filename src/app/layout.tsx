import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Script from 'next/script';
import { ThemeProvider } from './context/ThemeProvider';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
    variable: '--font-raleway',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Terreiro de Jagun',
    description: 'Terreiro de candomblé',
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
                    id="my-custom-google-analicts"
                    strategy="lazyOnload"
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-JSX7L0BTYV"
                />
                <Script id="my-custom-google-analict" strategy="lazyOnload">
                    {`window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('consent', 'default', {
                            'ad_storage': 'denied',
                            'analytics_storage': 'denied'
                            });
                        gtag('config', 'G-JSX7L0BTYV', {
                            cookie_flags: 'SameSite=None;Secure'
                            });`}
                </Script>
            </head>

            <body className={`${raleway.variable} antialiased`}>
                <ThemeProvider>{children}</ThemeProvider>
            </body>
        </html>
    );
}
