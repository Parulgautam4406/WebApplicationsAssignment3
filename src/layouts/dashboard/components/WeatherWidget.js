import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

const WeatherWidget = ({ apiKey, city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [apiKey, city]);

  const handleWidgetClick = () => {
    // Navigate to the WeatherPage when the user clicks on the widget
    navigate('/weather');
  };

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { name, main, weather } = weatherData;

  return (
    <Card onClick={handleWidgetClick}>
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Temperature: {main.temp} °C
        </Typography>
        <Typography variant="body1" gutterBottom>
          Weather: {weather[0].description}
        </Typography>
      </CardContent>
    </Card>
  );
};

// Define propTypes for the WeatherWidget component
WeatherWidget.propTypes = {
  apiKey: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default WeatherWidget;
