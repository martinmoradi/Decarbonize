import React from 'react';
import { Text, Box } from '../../../components/Theme';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

const MeteoBar = () => {
  const today = new Date();
  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentHour = today.getHours();
  const [timeFrame, setTimeFrame] = React.useState('Good Morning !');
  const [location, setLocation] = React.useState({ latitude: 0, longitude: 0 });
  const [meteo, setMeteo] = React.useState(0);
  const [city, setCity] = React.useState('');

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

  React.useEffect(() => {
    if (currentHour < 12) {
      setTimeFrame('Good Morning !');
    } else if (currentHour < 18) {
      setTimeFrame('Good Afternoon !');
    } else {
      setTimeFrame('Good Evening !');
    }
    permissionFlow();
  }, []);

  React.useEffect(() => {
    fetchWeather();
  }, [location]);

  return (
    <Box>
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
