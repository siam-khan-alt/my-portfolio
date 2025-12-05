import './globals.css';

export const metadata = {
  title: 'MD SIAM KHAN | MERN Stack Developer',
  description: 'Portfolio of MD SIAM KHAN - MERN Stack Developer specializing in React.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}