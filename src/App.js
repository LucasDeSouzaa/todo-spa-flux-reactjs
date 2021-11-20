import GlobalProvider from './contexts/Provider';
import Header from './components/peripherals/Header';
import Footer from './components/peripherals/Footer';
import AdicionaTodo from './components/AdicionaTodo';
import MostraTodo from "./components/MostraTodo";

function App() {
  return (
    <GlobalProvider>
      <div id="App" className="container d-flex flex-column justify-content-center align-items-center">
        <Header />
        <AdicionaTodo />
        <MostraTodo />
        <Footer />
      </div>
    </GlobalProvider>
  );
}

export default App;
