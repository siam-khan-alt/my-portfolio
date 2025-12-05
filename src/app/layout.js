import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'MD SIAM KHAN | MERN Stack Developer',
  description: 'Portfolio of MD SIAM KHAN - MERN Stack Developer specializing in React.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-[#020617] container mx-auto ">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}