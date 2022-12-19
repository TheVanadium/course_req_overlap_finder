import './App.css';
import Filters from './components/Filters';
import Results from './components/Results';

function App() {
  return (
    <div className='container'>
      <Filters></Filters>
      <Results></Results>
    </div>
  );
}

export default App;
