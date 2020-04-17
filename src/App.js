import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./components/PhotoCard";
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import "./App.css";

function App() {
const [image, setImage] = useState({});
const [date, setDate] = useState(new Date());
const future = {
  after: new Date(),
}
useEffect(() => {
  axios
  .get('https://api.nasa.gov/planetary/apod?api_key=w44QUG2ECbsfHOtpLlFGuMF5GYogIeRbyiGVewze&date=2020-04-16')
  .then(response => { setImage(response.data);
  });
}, [])

  return (
    <div className="App">
      <DayPicker onDayClick="setDate = date" disabledDays={ future }  />
     <PhotoCard title={image.title}
     url={image.url}
     explanation={image.explanation} />
    </div>
  );
}

export default App;
