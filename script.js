let weather = {
    apiKey:"9806c0cc2c7d504860afbec9e9c17b5a",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city + "&units=metric&appid=" 
              +this.apiKey
              
        )
        .then((response) => response.json())
        .then ((data) =>this.displayWeather(data));

    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind; 
        // console.log(name,icon,description,temp,humidity,speed)
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity:" +  humidity + "%";
        document.querySelector(".wind").innerText = "wind speed:" +  speed + 
        "km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
    },
    search: function(){
     this.fetchWeather(document.querySelector(".search-bar ").value);
    }  
};
document.querySelector(".search button").addEventListener("click", function () {
weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
if (event.key == "Enter"){
    weather.search();

}
});

weather.fetchWeather("patna");