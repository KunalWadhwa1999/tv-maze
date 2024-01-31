import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import ViewDetail from "./pages/ViewDetail";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/view-detail" element={<ViewDetail />}></Route>
          <Route path="/404" element={<Error />}></Route>
          <Route path="*" element={<Navigate replace to="/404" />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
