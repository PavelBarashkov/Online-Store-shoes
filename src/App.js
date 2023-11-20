import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from "./pages/components/AppRouter";
import { Header } from "./modules/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="app_container w-100 h-100">
        <Header />
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
