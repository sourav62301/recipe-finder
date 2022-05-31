import "./App.css";
import { MyContext } from "./components/navbar/context";
import Header from "./components/navbar/Header";
import Home from "./components/navbar/Home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import ErrorPage from "./components/navbar/404";
import Login from "./components/navbar/Login";
import Signup from "./components/navbar/Signup";
import { useContext } from "react";

function App() {
  const { user } = useContext(MyContext);
  return (
    <>
      <Router>
        
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />

            {!user && (
              <>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/signup" element={<Signup />} />
              </>
            )}
            <Route element={<ErrorPage />} />
          </Routes>
        
      </Router>
    </>
  );
}

export default App;
