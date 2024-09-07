import Footer from "./Footer";
import Header from "./Header";
const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
