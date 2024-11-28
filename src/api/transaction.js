export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Example: Return dummy transactions
    res.status(200).json([{ id: 1, name: 'Sample', amount: 100 }]);
  } else if (req.method === 'POST') {
    const transaction = req.body;
    res.status(201).json(transaction);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
