import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const axiosWithAuth = () => {
    return axios.create({
      headers: {
        authorization: localStorage.getItem("token")
      }
    });
  };

  useEffect(() => {
    const authAxios = axiosWithAuth();
    authAxios.get("http://localhost:5000/api/colors").then(response => {
      console.log(response);
      setColorList(response.data);
    });
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} authAxios={axiosWithAuth()} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
