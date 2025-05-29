import React, { useState } from 'react';

export default function App() {
  const [theme, setTheme] = useState('');
  const [ageGroup, setAgeGroup] = useState([]);
  const [colorPalette, setColorPalette] = useState('');
  const [prompt, setPrompt] = useState('');

  const handleAgeGroupChange = (e) => {
    const value = e.target.value;
    setAgeGroup(prev =>
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ageText = ageGroup.length ? `suitable for ${ageGroup.join(', ')} age group` : '';
    const colorText = colorPalette ? `using a ${colorPalette} color palette` : '';
    const promptText = `Design a room with a ${theme} theme ${ageText} ${colorText}`.trim();
    setPrompt(promptText);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Aro Room Designer</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Upload Room Image: </label>
          <input type="file" />
        </div>
        <div>
          <label>Select Theme: </label>
          <select onChange={(e) => setTheme(e.target.value)}>
            <option value="">-- Choose a theme --</option>
            <option value="boho">Boho</option>
            <option value="vintage">Vintage</option>
            <option value="modern">Modern</option>
            <option value="royal">Royal</option>
          </select>
        </div>
        <div>
          <label>Choose Age Group:</label><br />
          <label><input type="checkbox" value="Kid" onChange={handleAgeGroupChange} /> Kid</label><br />
          <label><input type="checkbox" value="Teen" onChange={handleAgeGroupChange} /> Teen</label><br />
          <label><input type="checkbox" value="Adult" onChange={handleAgeGroupChange} /> Adult</label>
        </div>
        <div>
          <label>Select Color Palette: </label>
          <select onChange={(e) => setColorPalette(e.target.value)}>
            <option value="">-- Choose colors --</option>
            <option value="earthy">Earthy</option>
            <option value="pastel">Pastel</option>
            <option value="neutral">Neutral</option>
            <option value="vibrant">Vibrant</option>
          </select>
        </div>
        <button type="submit">Submit Design Request</button>
      </form>
      {prompt && (
        <div style={{ marginTop: '20px', padding: '10px', background: '#f0f0f0', borderRadius: '6px' }}>
          <strong>Generated Prompt:</strong><br />
          {prompt}
        </div>
      )}
    </div>
  );
}
