import "./App.css";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Overview from "./Pages/Overview/Overview";
import Excel from "./Pages/Excel/Excel";
import Investor from "./Pages/Investor/Investor";
import Insights from "./Pages/Insights/Insights";
import Target from "./Pages/Target/Target";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider, useMyContext } from "./context/userContext";
function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </UserProvider>
  );
}

const AppContent = () => {
  const { hamBurger } = useMyContext();

  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className={hamBurger ? "appleft" : "sidebarnone"}>
          <Sidebar />
        </div>
        <div className="appright">
          <Routes>
            <Route exact path="/" element={<Overview />} />
            <Route exact path="/Excel" element={<Excel />} />
            <Route exact path="/Insights" element={<Insights />} />
            <Route exact path="/user/:userId" element={<Investor />} />
            <Route exact path="/Target" element={<Target />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
