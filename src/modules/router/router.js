/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "../shop/page-shop";
import Home from "../home/page-home";

function RouteSwitch()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
export default RouteSwitch;
