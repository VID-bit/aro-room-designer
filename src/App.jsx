// src/App.jsx
import React, { useState } from 'react';

function App() {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const generateImage = async () => {
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await response.json();
    setImageUrl(data.image);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Aro Room Designer</h1>
      <input
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe your dream room..."
        style={{ width: '300px', padding: '10px' }}
      />
      <button onClick={generateImage} style={{ marginLeft: '10px' }}>Generate</button>
      {imageUrl && <img src={imageUrl} alt="Generated Room" style={{ marginTop: '20px', width: '80%' }} />}
    </div>
  );
}

export default App;
