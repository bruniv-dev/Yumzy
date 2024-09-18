import NavBar from "./components/NavBar/NavBar";
import SideBar from "./components/SideBar/SideBar";
import { Routes, Route } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Orders from "./pages/Orders/Orders";

function App() {
  return (
    <>
      <NavBar />
      <hr />
      <div className="app-content">
        <SideBar />
        <Routes>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/list" element={<List />}></Route>
          <Route path="/orders" element={<Orders />}></Route>
        </Routes>
      </div>
    </>
  );
}
export default App;
