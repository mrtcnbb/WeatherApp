const apiKey = 'wvMwG9gVCGRYZVkW7ENNCf8o5GG6bkyJ';

// get weather information
const getWeather = async (locationId) => {
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${locationId}?apikey=${apiKey}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

// get city information
const getCity = async (city) => {
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${apiKey}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

getCity('ankara')
  .then((data) => {
    return getWeather(data.Key);
  })
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
