import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./pages/components/AppRouter";
import { Header } from "./modules/Header";
import { Footer } from "./modules/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app_container w-100 h-100">
        <header className="header">
          <Header />
        </header>
        <main className="content">
          <AppRouter />
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
