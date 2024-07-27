import "./table.css";
import { useEffect, useState } from "react";
import Loader from "../Loader/loader";
import { Element } from "react-scroll";

export const Table = () => {
  const [selectedCityId, setSelectedCityId] = useState(null);
  const [cities, setCities] = useState([]);
  const [read, setRead] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = () => {
    setLoading(true);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    fetch("https://localhost:7090/api/City/GetAllCities", {
      method: "GET",
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((result) => {
        setCities(result);
        if (result.length > 0) {
          setSelectedCityId("non");
        }
      })
      .catch((error) => console.error("Error fetching cities:", error))
      .finally(() => setLoading(false));
  };

  const getRead = async (cityId) => {
    setLoading(true);
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const url =
      cityId && cityId !== "non"
        ? `https://localhost:7090/api/Read/GetReadsByCityId?cityId=${cityId}`
        : `https://localhost:7090/api/Read/GetAllReads`;

    fetch(url, {
      method: "GET",
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((result) => setRead(result))
      .catch((error) => console.error("Error fetching readings:", error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (selectedCityId) {
      getRead(selectedCityId);
    }
  }, [selectedCityId]);

  const handleCityChange = (event) => {
    const cityId = event.target.value;
    setSelectedCityId(cityId);
  };

  return (
         <Element name="section2">
    <div className="table">
      <div className="flex-container">
        <select onChange={handleCityChange} value={selectedCityId || "non"}>
          <option value="non">Select All City</option>
          {cities.map((city, index) => (
            <option key={index} value={city.id}>
              {city.name}
            </option>
          ))}
        </select>
      </div>

      <div className="table-container">
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Cities</th>
                <th>Dustcm</th>
                <th>Temp</th>
                <th>Cazs</th>
                <th>Quality</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="7">
                    <Loader />
                  </td>
                </tr>
              ) : (
                Array.isArray(read) &&
                read.map((item, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{item.city}</td>
                    <td>{item.dcm} µg/m³</td>
                    <td>{item.tempDeg} °C</td>
                    <td>{item.gazPercentage} ppm</td>
                    <td>{item.quality}</td>
                    <td>
                      {item.quality < 50
                        ? "Air Quality Status Poor"
                        : item.quality < 100
                        ? "Air Quality Status Moderate"
                        : item.quality === 100
                        ? "Air Quality Status Excellent"
                        : "Unknown Air Quality Status"}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
      </Element>
  );
};
