import React, { createContext, useEffect, useState } from "react";

const GetName = createContext();

const NameProvider = (props) => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("appData");
    return savedName ? JSON.parse(savedName) : null;
  });

  useEffect(() => {
    if (name !== null) {
      localStorage.setItem("appData", JSON.stringify(name));
    } else {
      localStorage.removeItem("appData");
    }
  }, [name]);

  return (
    <GetName.Provider value={{ name, setName }}>
      {props.children}
    </GetName.Provider>
  );
};

export { GetName, NameProvider };
