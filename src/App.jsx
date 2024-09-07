import Clients from "./components/Clients";
import Hero from "./components/Hero";
import Services from "./components/Services";
import RootLayout from "./layouts/RootLayout";

function App() {
  return (
    <>
      <RootLayout>
        <Hero />
        <Clients />
        <Services />
      </RootLayout>
    </>
  );
}

export default App;
