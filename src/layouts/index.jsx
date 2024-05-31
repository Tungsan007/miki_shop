import { Header, Footer } from './default';

export default function MainLayout({ children, variant }) {
  if (variant === 'admin') {
    return (
      <>
        <Header />
        <h1>Admin Layout</h1>
        <main>{children}</main>
        <Footer />
      </>
    );
  }
  return (
    <div className="overflow-hidden">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
