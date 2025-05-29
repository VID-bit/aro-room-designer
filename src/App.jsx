import { useState } from 'react';

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
      setDesignIdea(data.result);
    } catch (error) {
      setDesignIdea('Failed to generate design. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Aro Room Designer</h1>

      {/* Your other fields remain here... */}

      <button onClick={handleSubmit}>Submit Design Request</button>

      {loading && <p>Loading design idea...</p>}
      {designIdea && (
        <div style={{ marginTop: '1rem', whiteSpace: 'pre-wrap' }}>
          <h3>Design Suggestion:</h3>
          <p>{designIdea}</p>
        </div>
      )}
    </div>
  );
}
