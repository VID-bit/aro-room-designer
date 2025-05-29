import React, { useState } from 'react';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [designIdea, setDesignIdea] = useState('');

  const handleSubmit = async () => {
    setLoading(true);
    const prompt = `Generate an interior design suggestion based on the following:
- Theme: Modern Boho
- Age group: Teen
- Color palette: Earthy tones
Make the tone engaging, unique, and visually driven.`;

    try {
      const res = await fetch('/api/generateDesign', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      setDesignIdea(data.result || 'No design returned.');
    } catch (error) {
      console.error('Design fetch failed:', error);
      setDesignIdea('Failed to generate design. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Aro Room Designer</h1>

      <button
        onClick={handleSubmit}
        style={{
          padding: '10px 20px',
          fontSize: '1rem',
          cursor: 'pointer',
          backgroundColor: '#333',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
        }}
      >
        Submit Design Request
      </button>

      {loading && <p style={{ marginTop: '1rem' }}>✨ Generating your room magic...</p>}

      {designIdea && (
        <div style={{ marginTop: '2rem', padding: '1rem', background: '#f5f5f5', borderRadius: '8px' }}>
          <h3>Design Suggestion:</h3>
          <p style={{ whiteSpace: 'pre-wrap' }}>{designIdea}</p>
        </div>
      )}
    </div>
  );
}
