return (
  <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
    <h1>Aro Room Designer</h1>

    <button onClick={handleSubmit} style={{ padding: '10px 20px', marginTop: '1rem' }}>
      Submit Design Request
    </button>

    {loading && <p style={{ marginTop: '1rem' }}>Generating your magical room concept...</p>}

    {designIdea && (
      <div style={{ marginTop: '2rem', padding: '1rem', background: '#f9f9f9', borderRadius: '8px' }}>
        <h3>✨ Design Suggestion:</h3>
        <p style={{ whiteSpace: 'pre-wrap' }}>{designIdea}</p>
      </div>
    )}
  </div>
);
