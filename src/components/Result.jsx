import React from "react";

const Result = ({ weatherData }) => { // Destructuring fix
  return (
    <div className="shadow-xl p-8 rounded-xl max-w-md mx-auto bg-white mt-20">
   
      {weatherData ? (
        <>
          <h2 className="text-4xl text-center font-bold mb-6">
            {weatherData.name}
          </h2>

          <div className="border border-black rounded-lg overflow-hidden">
         
            <div className="grid grid-cols-2 border-b border-black h-16 items-center">
              <div className="text-center border-r border-black flex flex-col justify-center h-full">
                <span className="text-xs text-gray-500 uppercase">Max</span>
                <span className="font-semibold text-lg">
                  {weatherData.main.temp_max} °C
                </span>
              </div>
              <div className="text-center flex flex-col justify-center h-full">
                <span className="text-xs text-gray-500 uppercase">Min</span>
                <span className="font-semibold text-lg">
                  {weatherData.main.temp_min} °C
                </span>
              </div>
            </div>

          
            <div className="grid grid-cols-2 h-16 items-center">
              <div className="text-center border-r border-black flex justify-center items-center h-full text-2xl">
         
                <img 
                  src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} 
                  alt="weather icon" 
                  className="w-12"
                />
              </div>
              <div className="text-center font-medium capitalize">
                {weatherData.weather[0].description}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-500 font-medium">
          Please enter the city name to see weather
        </div>
      )}
    </div>
  );
};

export default Result;