import img1 from "./assets/a.jpg";
import img2 from "./assets/b.jpg";
import img3 from "./assets/c.jpg";

export const Items = [
  {
    name: "Caz",
    value: "20.5",
    symbol: "ppm",
    img: img1,
  },
  {
    name: "Dustcm",
    value: "150",
    symbol: "µg/m³",
    img: img2,
  },
  {
    name: "Temp",
    value: "22.3",
    symbol: "°C",
    img: img3,
  },
];

export const sensorData = [
  {
    id: 1,
    city: "Baghdad",
    dustcm: "150",
    temp: "22.3",
    caz: "20.5",
    quality:50,
    action: "Moderate",
  },
  {
    id: 2,
    city: "Basra",
    dustcm: "130",
    temp: "23.1",
    caz: "18.2",
    quality: 100,
    action: "Good",
  },
  {
    id: 3,
    city: "Mosul",
    dustcm: "170",
    temp: "21.9",
    caz: "21.8",
    quality: 0,
    action: "High ",
  },
];
export const finalScores = [
  {
    dayNum: "Sunday",
    value: 80,
  },
  {
    dayNum: "Monday",
    value: 50,
  },
  {
    dayNum: "Tuesday",
    value: 30,
  },
  {
    dayNum: "Wednesday",
    value: 10,
  },
  {
    dayNum: "Thursday",
    value: 40,
  },
  {
    dayNum: "Friday",
    value: 25,
  },
  {
    dayNum: "Saturday",
    value: 80,
  },
];
