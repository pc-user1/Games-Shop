import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home-page/";
import { Header } from "./components/header/";
import { GamePage } from "./pages/game-pages";
import { GameOrder } from "./pages/game-order";
import { LoginPage } from "./pages/login-page";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div className="App">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Games-Shop/:title" element={<GamePage />} />
              <Route path="/order-game" element={<GameOrder />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
