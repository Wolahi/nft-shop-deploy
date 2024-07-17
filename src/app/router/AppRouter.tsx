import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "../../pages/AboutUs/ui/AboutUs.tsx";
import FAQ from "../../pages/FAQ/ui/FAQ.tsx";
import Dashboard from "../../pages/Dashboard/ui/Dashboard.tsx";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/*<Route path="/" element={<MainPage />}></Route>*/}
          {/*<Route index element={<div>No page is selected.</div>} />*/}
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="AboutUs" element={<AboutUs />}></Route>
          <Route path="FAQ" element={<FAQ />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
