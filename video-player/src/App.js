import './App.css';

function App() {
  return (
    <div>
      <video id="videoPlayer" width="650" controls autoPlay>
        <source src="/video" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
