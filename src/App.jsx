import 'regenerator-runtime/runtime'

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import "./App.css";

function App() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className='App'>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <br/>
      <br/>
      <i style={{fontWeight: 'bold'}}>Not Encode:</i>
      <p className='text'>{transcript}</p>
      <i style={{fontWeight: 'bold'}}>Encode:</i>
      <p className='text'>{btoa(transcript)}</p>
    </div>
  );
}

export default App;
