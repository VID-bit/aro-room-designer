import { useState } from 'react';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      if (data.image) setImage(`data:image/png;base64,${data.image}`);
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4 space-y-6">
      <h1 className="text-3xl font-bold">Aro Room Designer</h1>

      <input
        type="text"
        placeholder="Enter your room design prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="border p-2 rounded w-full max-w-lg"
      />

      <button
        onClick={handleGenerate}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        disabled={loading}
      >
        {loading ? 'Generating...' : 'Submit Design Request'}
      </button>

      {image && (
        <img
          src={image}
          alt="Generated Room"
          className="mt-6 max-w-full rounded shadow-lg"
        />
      )}
    </div>
  );
}
