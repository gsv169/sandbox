import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Scene({ scene, onChoiceClick }) {
  return (
    <div className="scene text-center">
      <img src={`/images/${scene.image}`} alt="Scene" className="img-fluid mb-3" />
      <p className="lead mb-4">{scene.text}</p>
      <div className="choices d-grid gap-2 col-6 mx-auto">
        {scene.choices && scene.choices.map((choice, index) => (
          <button
            key={index}
            className="btn btn-primary btn-lg"
            onClick={() => onChoiceClick(choice.nextSceneId)}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Scene;
