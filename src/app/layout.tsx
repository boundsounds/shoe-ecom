import RecoilProvider from '../app/components/RecoilProvider';
import Navbar from './components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <RecoilProvider>
          {children}
        </RecoilProvider>
      </body>
    </html>
  );
}