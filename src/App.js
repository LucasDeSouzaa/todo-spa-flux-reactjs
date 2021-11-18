import GlobalProvider from "./contexts/Provider";
import Rotas from "./routes/Rotas";
// import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Rotas />
    </GlobalProvider>
  );
}

export default App;
