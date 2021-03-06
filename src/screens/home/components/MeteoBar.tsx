import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import React, { useEffect, useState } from 'react';
import { Box, Text } from '../../../components/Theme';

const MeteoBar = () => {
  const today = new Date();
  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentHour = today.getHours();
  const [timeFrame, setTimeFrame] = useState('Good Morning !');
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [meteo, setMeteo] = useState(0);
  const [city, setCity] = useState('');

  const permissionFlow = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      throw new Error('Location permission not granted');
    }
    const position = await Location.getCurrentPositionAsync({});
    if (!position) {
      throw new Error('Location not found');
    }
    setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude });
  };

  const fetchWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=c469f11dbd61f2b3429aeefed47dc1b6`
    );
    const meteo = await response.json();
    setMeteo(meteo.main.temp);
    setCity(`in ${meteo.name}`);
  };

  useEffect(() => {
    if (currentHour < 12) {
      setTimeFrame('Good Morning !');
    } else if (currentHour < 18) {
      setTimeFrame('Good Afternoon !');
    } else {
      setTimeFrame('Good Evening !');
    }
    permissionFlow();
  }, []);

  useEffect(() => {
    fetchWeather();
  }, [location]);

  return (
    <Box style={{ marginHorizontal: 20 }}>
      <Text variant="title2" marginBottom="m">
        {timeFrame} ☀️
      </Text>
      {location.latitude !== 0 ? (
        <Text variant="body">
          It's {weekday[today.getDay()]}, temperature outside is {meteo}°C {city}
        </Text>
      ) : (
        <Text variant="body" color="white"></Text>
      )}
    </Box>
  );
};

export default MeteoBar;
