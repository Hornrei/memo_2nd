
    const apiKey = '114c1d0ef4c1e9135ea443dc5d39acea';
    const touristLocations = [
      { name: '札幌市時計台', lat: 43.062056, lon: 141.354527 },
      { name: 'スカイツリー', lat: 35.710063, lon: 139.810700 },
      { name: '伏見稲荷大社', lat: 34.967140, lon: 135.772672 },
      { name: '横浜赤レンガ倉庫', lat: 35.456994, lon: 139.636798 },
      { name: '名古屋城', lat: 35.183690, lon: 136.899015 },
      { name: '伊勢神宮', lat: 34.487290, lon: 136.722426 },
      { name: '東京ディズニーリゾート', lat: 35.632896, lon: 139.880394 },
      { name: '厳島大社', lat: 34.296944, lon: 132.319167 },
      { name: '出雲大社', lat: 35.366688, lon: 132.755850 },
      { name: '鳥取砂丘', lat: 35.540783, lon: 134.224364 },
      { name: '沖縄美ら海水族館', lat: 26.694640, lon: 127.877493 },
      { name: '屋久島', lat: 30.387497, lon: 130.714685 }
    ];

    async function getWeatherForTouristLocations() {
      const promises = touristLocations.map(async (location) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&lang=ja&units=metric&appid=${apiKey}`);
        const data = await response.json();
        console.log(data);

        if (data.weather && data.weather.length > 0) {
          displayWeather(location.name, data.main.temp, data.weather[0].description);
        }
      });

      await Promise.all(promises);
    }

    function displayWeather(location, temperature, description) {
      const weatherDiv = document.getElementById('weather');
      const weatherInfo = document.createElement('div');
      weatherInfo.innerHTML = `<p>${location}: ${temperature}°C, ${description}</p>`;
      weatherDiv.appendChild(weatherInfo);

      if (description.includes('雲')) {
        weatherInfo.classList.add('cloudy');
      } else if (description.includes('がち')) {
        weatherInfo.classList.add('cloudy');
      } else if (description.includes('晴')) {
        weatherInfo.classList.add('sunny');
      } else if (description.includes('雨')) {
        weatherInfo.classList.add('rainy');
      } else if (description.includes('小')) {
        weatherInfo.classList.add('rainy');
      } else if (description.includes('雷')) {
        weatherInfo.classList.add('rainy');
      } else if (description.includes('雪')) {
        weatherInfo.classList.add('snowy');
      }
    }

    function filterWeather(type) {
      const weatherDiv = document.getElementById('weather');
      weatherDiv.innerHTML = ''; // 現在のコンテンツをクリア

      touristLocations.forEach(location => {
        const response = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&lang=ja&units=metric&appid=${apiKey}`)
          .then(response => response.json())
          .then(data => {
            if (data.weather && data.weather.length > 0) {
              const description = data.weather[0].description;
              if ((type === 'cloudy' && (description.includes('雲')||description.includes('曇'))) ||
                  (type === 'sunny' && description.includes('晴')) ||
                  (type === 'rainy' && (description.includes('雨')||description.includes('小'))) ||  // ここにセミコロンを追加
                  (type === 'snowy' && description.includes('雪'))) {
                displayWeather(location.name, data.main.temp, description);　ｈ
              }

            }
          });
      });
    }

    // 初回の天気情報取得
    getWeatherForTouristLocations();
