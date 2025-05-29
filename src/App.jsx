import React, { useState } from 'react';

export default function App() {
  const [image, setImage] = useState(null);
  const [theme, setTheme] = useState('');
  const [age, setAge] = useState([]);
  const [color, setColor] = useState('');
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleAgeChange = (e) => {
    const value = e.target.value;
    setAge((prev) =>
      prev.includes(value) ? prev.filter((a) => a !== value) : [...prev, value]
    );
  };

  const handleSubmit = () => {
    const finalPrompt = `Design a room with a ${theme || 'modern'} theme, suitable for ${
      age.length ? age.join(', ') : 'all age groups'
    }, using a ${color || 'neutral'} color palette.`;

    setPrompt(finalPrompt);
    setResult('🪄 Generating output using AI... (integration coming next)');

    // In the next step, we’ll send finalPrompt + image to OpenAI API
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Aro Room Designer</h1>

      <div style={{ marginBottom: '1rem' }}>
        <label>Upload Room Image: </label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Select Theme: </label>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
          <option value="">-- Choose a theme --</option>
          <option value="boho">Boho</option>
          <option value="vintage">Vintage</option>
          <option value="modern">Modern</option>
          <option value="classic">Classic</option>
          <option value="quirky">Quirky</option>
        </select>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Choose Age Group:</label><br />
        <label><input type="checkbox" value="kid" onChange={handleAgeChange} /> Kid</label><br />
        <label><input type="checkbox" value="teen" onChange={handleAgeChange} /> Teen</label><br />
        <label><input type="checkbox" value="adult" onChange={handleAgeChange} /> Adult</label>
      </div>

      <div style={{ marginBottom: '1rem' }}>
        <label>Select Color Palette: </label>
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="">-- Choose colors --</option>
          <option value="pastel">Pastel</option>
          <option value="earthy">Earthy Tones</option>
          <option value="vibrant">Vibrant</option>
          <option value="monochrome">Monochrome</option>
        </select>
      </div>

      <button onClick={handleSubmit}>Submit Design Request</button>

      {image && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Preview:</h3>
          <img src={image} alt="Room Preview" style={{ maxWidth: '100%', borderRadius: '8px' }} />
        </div>
      )}

      {prompt && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Prompt:</h3>
          <p>{prompt}</p>
        </div>
      )}

      {result && (
        <div style={{ marginTop: '1rem', color: 'green' }}>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}
