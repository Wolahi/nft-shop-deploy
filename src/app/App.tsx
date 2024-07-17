import "./App.css";
import MainPage from "../pages/MainPage/ui/MainPage.tsx";
import AppRouter from "./router/AppRouter.tsx";

const App = () => {
  return (
    <div>
      <MainPage content={<AppRouter />} />
    </div>
  );
};

export default App;
