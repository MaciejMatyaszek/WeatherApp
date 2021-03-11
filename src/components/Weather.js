import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthenticationContext";
import Search from "../components/Search";
import cities from "../database/city.list.json";
import CityDetails from "../components/CityDetails";

const Weather = () => {
  /*
  1. searchBar
  2. Miasta szczegoly
  wybrane miasto
  Miasto szczegoly useeffect api dane miasta [idCity]
  3. lista
  */

  const [selectedCity, setSelectedCity] = useState(null);

  const selectCity = (city) => {
    console.log(city);
    const tempCity = cities.find((x) => x.name === city);
    console.log(tempCity);
    if (!tempCity) {
      setSelectedCity(null);
    } else {
      setSelectedCity(tempCity);
    }
  };

  const auth = useContext(AuthContext);

  return (
    <div>
      Zalogowano {auth.username}
      <Search search={selectCity} />
      {selectedCity && <CityDetails city={selectedCity} />}
    </div>
  );
};

export default Weather;
