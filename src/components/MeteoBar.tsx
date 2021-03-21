import React from 'react';
import { Text ,Box} from '../components';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

const MeteoBar = () => {
  const today = new Date();
  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [city, setCity] = React.useState("Berlin")
  const [meteo, setMeteo] = React.useState(0);
  const curHr = today.getHours()
  const [timeFrame, setTimeFrame] = React.useState("Good Morning !"); 
  const [location, setLocation] = React.useState({latitude: 0, longitude: 0});


  const permissionFlow = async ()=>{
    const {status} = await Permissions.askAsync(Permissions.LOCATION)
    if(status !== 'granted'){
      throw new Error('Location permission not granted');
    }
    const templocation = await Location.getCurrentPositionAsync({});
    setLocation({latitude:templocation.coords.latitude, longitude:templocation.coords.longitude});
    const geoCode = await Location.reverseGeocodeAsync(location)
    const city = geoCode[0].city
    if(!city){
      throw new Error('City not found');
    }
    setCity(city);
  }


  React.useEffect(()=>{
    if (curHr < 12) {
      setTimeFrame("Good Morning !")
    } else if (curHr < 18) {
      setTimeFrame("Good Afternoon !")
    } else {
      setTimeFrame("Good Evening !")
    }
    permissionFlow()
  }, [])
 
  
  const fetchWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c469f11dbd61f2b3429aeefed47dc1b6`
    );
    const meteo = await response.json();
    setMeteo(meteo.main.temp);
  };
  React.useEffect(() => {
    fetchWeather();
  }, [city]);

  return (
    <Box>
      <Text variant="title2" color="white" marginBottom="m">
            {timeFrame}
          </Text>
    <Text variant="body" color="white">
      It's {weekday[today.getDay()]}, temperature outside is {meteo}°C in {city}
    </Text>
    </Box>
    
  );
};

export default MeteoBar