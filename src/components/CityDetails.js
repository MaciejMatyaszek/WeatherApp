import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthenticationContext";

const CityDetails = (props) => {
  const { id } = props.city;
  const { city, setCity } = useState(null);
  const auth = useContext(AuthContext);
  useEffect(() => {
    const fetchCity = async () => {
      const response = await fetch(
        `//api.openweathermap.org/data/2.5/weather?id=${id}&appid=062b5299fba6f7c2085d3180597c69ed`
      );
      const responseData = await response.json();
      console.log(responseData);
    };
    fetchCity();
  }, [id]);

  return <div>{props.city.name}</div>;
};

export default CityDetails;
