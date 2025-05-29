return (
  <div>
    <h1>Aro Room Designer</h1>
    <button onClick={handleSubmit}>Submit Design Request</button>

    {loading && <p>Generating your magical room concept...</p>}

    {designIdea && (
      <div style={{ marginTop: '20px', whiteSpace: 'pre-wrap' }}>
        <h3>Design Suggestion:</h3>
        <p>{designIdea}</p>
      </div>
    )}
  </div>
);
