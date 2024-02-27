import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import { GlobalRoutes } from "./routes/global.routes";
import { BrowserRouter } from "react-router-dom";
import { LoginContext } from "./context/loginContext";

function App() {
  return (
    <BrowserRouter>
      <LoginContext>
        <GlobalRoutes/>
      </LoginContext>
    </BrowserRouter>
  );
}

export default App;
