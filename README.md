# Note for Reviewer: 
This is what I choose to add:
  * Allow the user to add additional trips
  * Add end date
  * Allow the user to remove the trip
  * A default picture is used as background, if no picture for the location could be found

  (Weather forcast is used, if the user travels within the next five days. Any predictions beyond that time frame are very unreliable and thus current weather is shown otherwise.)

# What does this code do?
This is the code of web page, that gets weather forcast information for a travel location enterd by the user. Different APIs are used.
Differen working environments are set up.

# Which command do you need to run the code:
To compile in development enviroment use command:
````
     npm run dev
````

To compile in production enviroment use command:
````
     npm run build
     and start server: node ./src/server/index.js
````

To run tests use:
````
     npm run test
````

# Author: 
Katharina Kern, galati2@web.de

# API Crededentials:
* Current weather and forcast data from https://www.weatherbit.io
* Translation city names into Lon/Lat pairs:
http://www.geonames.org
* Background pictures for the entered location from https://pixabay.com






