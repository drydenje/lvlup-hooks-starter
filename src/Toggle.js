import React, { useState, useContext } from "react";
import DishForm from "./DishForm";
import { UserContext } from "./App";

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);
  const userInfo = useContext(UserContext);
  if (!userInfo.user) return null;

  return (
    <div>
      <button onClick={() => setToggle(!isToggled)}>Toggle</button>
      {isToggled && <DishForm />}
    </div>
  );
};

export default Toggle;
