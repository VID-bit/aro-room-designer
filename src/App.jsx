import React, { useState } from 'react';

export default function App() {
  const [image, setImage] = useState(null);
  const [theme, setTheme] = useState('');
  const [age, setAge] = useState([]);
  const [color, setColor] = useState('');

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleAgeChange = (e) => {
    const value = e.target.value;
    setAge(prev =>
      prev.includes(value)
        ? prev.filter(a => a !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = () => {
    alert(`Image uploaded ✅
Theme: ${theme}
Age: ${age.join(', ')}
Color Palette: ${color}`);
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
    </div>
  );
}
