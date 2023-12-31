import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";

const Root = () => {
  return (
    <div className="max-w-[1340px] mx-auto">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
