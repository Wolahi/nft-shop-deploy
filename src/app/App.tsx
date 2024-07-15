import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import MainPage from "../pages/MainPage/ui/MainPage.tsx";

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<MainPage />}></Route>
          </Routes>
      </Router>
  )
}

export default App
