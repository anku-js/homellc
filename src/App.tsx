import "./App.css";
import StatusBar from "./components/StatusBar";
import Navbar from "./components/Navbar/Navbar";
import WeatherCard from "./components/WeatherCard/WeatherCard";
function App() {
  return (
    <div>
      <StatusBar />
      <Navbar />
      <WeatherCard />
    </div>
  );
}

export default App;
