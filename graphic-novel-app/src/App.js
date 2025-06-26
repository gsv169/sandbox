import React, { useState } from 'react';
import storyData from './data/story.json';
import Scene from './components/Scene';
import './App.css';

function App() {
  const [currentSceneId, setCurrentSceneId] = useState('start');

  const currentScene = storyData.scenes.find(scene => scene.id === currentSceneId);

  const handleChoiceClick = (nextSceneId) => {
    setCurrentSceneId(nextSceneId);
  };

  if (!currentScene) {
    return <div>Error: Scene not found!</div>;
  }

  return (
    <div className="App container mt-5">
      <Scene scene={currentScene} onChoiceClick={handleChoiceClick} />
    </div>
  );
}

export default App;