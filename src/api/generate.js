export default async function handler(req, res) {
  const { prompt } = req.body;

  const response = await fetch(
    'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer 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`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs: prompt }),
    }
  );

  const blob = await response.blob();
  const buffer = await blob.arrayBuffer();
  const base64Image = Buffer.from(buffer).toString('base64');
  const imageData = `data:image/png;base64,${base64Image}`;

  res.status(200).json({ image: imageData });
}
