import './App.css';
import Video from './Video'

function App() {
  return (
    <div className="app">


      <div className='app__videos'>
      <Video url={"https://static.videezy.com/system/resources/previews/000/039/967/original/drone-circles-tourist-boat-4K.mp4"} channel='drones' description='Best footage everrrr' song='Beautiful places' likes={200} messages={ 123} shares={25}/>
      <Video url={'https://static.videezy.com/system/resources/previews/000/021/564/original/descending-above-road-4K.mp4'} channel='drones' description='Best footage everrrr' song='Beautiful places' likes={200} messages={ 123} shares={25}/>
      </div>
    </div>
  );
}

export default App;
