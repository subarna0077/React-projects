import Player from "./Components/Player";
import TimerChallenge from "./Components/TimerChallenge";

function App() {
  return (
    <div className="App">
     <Player/>
     <TimerChallenge title="Easy" targetTime={1}/>
     <TimerChallenge title="Easy" targetTime={3}/>
     <TimerChallenge title="Easy" targetTime={5}/>
     <TimerChallenge title="Easy" targetTime={10}/>
    </div>
  );
}

export default App;
