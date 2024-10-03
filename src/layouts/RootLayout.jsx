import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Loader from "./Loader";
const RootLayout = () => {
  const navigation = useNavigation();
  {
    navigation.state === "loading" && <Loader />;
  }
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen dark:bg-black_primary transition-colors duration-200 px-[4%] py-12 lg:px-[8%]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
