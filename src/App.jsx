import React, { useState } from 'react';

export default function App() {
  const [image, setImage] = useState(null);
  const [theme, setTheme] = useState('');

  const handleImageChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
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

      {image && (
        <div>
          <h3>Preview:</h3>
          <img src={image} alt="Preview" style={{ maxWidth: '100%', borderRadius: '8px' }} />
        </div>
      )}
    </div>
  );
}
