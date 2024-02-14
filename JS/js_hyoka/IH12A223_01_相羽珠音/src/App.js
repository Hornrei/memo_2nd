import TopPage from './pages/toppage';
import MoonSlider from './components/moon';
import Calendar from './components/calendar';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopPage />
      <MoonSlider />
      <Calendar />
    </div>
  );
}

export default App;