import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MDBox from 'components/MDBox';
import PropTypes from 'prop-types'; // Import PropTypes

const WeatherPage = ({ apiKey }) => {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Canada&appid=72961901719cab360af22fd7985420b7&units=metric`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [apiKey, city]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { name, main, weather } = weatherData;

  return (
    <Card>
      <MDBox
        variant="gradient"
        bgColor="info"
        borderRadius="lg"
        coloredShadow="info"
        mx={5}
        mt={-3}
        p={2}
        mb={1}
        textAlign="center"
      >
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
      </MDBox>
    </Card>
  );
};

// Add propTypes for the WeatherPage component
WeatherPage.propTypes = {
  apiKey: PropTypes.string.isRequired, // Make apiKey required and of type string
};

export default WeatherPage;
