import React from 'react';
import './App.css';

function App() {
  // autoplay video
  const videoRef = React.useRef();

  React.useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        id="videoPlayer"
        src="http://localhost:8000/video"
        width="650"
        controls
        autoPlay
        loop
      />
    </div>
  );
}

export default App;
