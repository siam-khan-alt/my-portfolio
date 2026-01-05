import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';

export const metadata = {
  title: 'MD SIAM KHAN | MERN Stack Developer',
  description: 'Full Stack MERN Developer - Building scalable, modern web applications',
  keywords: 'MERN Stack, React, Node.js, MongoDB, Express, Full Stack Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}