import './index.css';
import Navigation from './components/navigation.js';
import Menu from './components/menu.js';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <h1 className='title-main'>Code Climber</h1>
      <div className='container-main'>
        <Menu />
      </div>
    </div>
  );
}

export default App;
