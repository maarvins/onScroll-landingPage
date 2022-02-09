import './App.css';

import Hero from './components/Hero'

import travel_01 from "./assets/travel-01.jpg"
import travel_02 from "./assets/travel-02.jpg"
import travel_03 from "./assets/travel-03.jpg"

function App() {
  return (
    <div className="App">
      <Hero imageSrc={travel_01}/>
    </div>
  );
}

export default App;
