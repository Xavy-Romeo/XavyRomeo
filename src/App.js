import backgrounVid from './assets/videos/backgroundVid.mp4';

function App() {
  return (
    <div> 
      <video autoPlay loop muted>
        <source src={backgrounVid} type='video/mp4' />
      </video>
    </div>
  );
};

export default App;