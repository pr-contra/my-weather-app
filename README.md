# Weather App

Simple weather app created with React JS

## Prerequisites

- OpenWeatherMap API Key;
- [Node](https://nodejs.org/en/);
- NPM or [yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable);
- [Git](https://git-scm.com/downloads);

## Getting started

1. This project makes requests to [OpenWeather API](https://openweathermap.org/)
   so you will need to create an account and generate an API_KEY;
   1.1 - Once you have generated this key add it to `.env` file (preferably to `.env.local`);

   ```bash
    REACT_APP_API_KEY=<add-your-api-key-here>
   ```

2. Clone the project repository;
3. Install the dependencies with `yarn` or `npm install` as preferable;
4. Run the application with `yarn start` or `npm start`

## About the project

In this project you are able to:

- Get current weather and 7-day forecast in your location (if geolocation permissions provided):
  - **OpenWeatherMap API only allows 7-day forecast on free-plans**;
  - If user doesn't grant geolocation permission, gets the weather for the default coordinates;
- User can search for as many cities as he would like to:
  - This cities will be saved as localStorage;
  - This cities can be deleted;
- The user will receive notifications for the given situations:
  - When a city is added;
  - When a city is deleted;
  - When the searched city already was added;
  - When the typed text doesn't correspond to a valid city;

### Project stack

- React (Create React App)
- CSS with Styled-Components
- Linting with Eslint
- Code formatting with Prettier/editorconfig

### Project structure

```bash
src/
  components # App's components
  context # Apps's context providers
  hooks # App's custom hooks
  services # External service related configurations
  theme # App's base styles and global styling variables
  utils # Helper functions
```
