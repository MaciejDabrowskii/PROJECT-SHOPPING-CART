/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import React, { useEffect, useState } from "react";
import { Link, Router } from "react-router-dom";
import "./App.css";
import Shop from "./modules/shop/page-shop";
import RouteSwitch from "./modules/router/router";

function App()
{
  return (
    <RouteSwitch />
  );
}

export default App;
