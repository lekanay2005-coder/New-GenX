const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/status', (req, res) => {
  res.json({
    success: true,
    message: 'NEW-GenX Server Running Successfully',
    marketplace: 'NEW-GenX',
    blockchain: 'Solana'
  });
});

app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Cyberpunk Hoodie', creator: 'TechWear', price: '50 SOL' },
    { id: 2, name: 'Lo-Fi Beats Pack', creator: 'BeatMaker', price: '25 USDC' },
    { id: 3, name: 'Abstract Dreams #1', creator: 'Artistry', price: '2.50 SOL' }
  ]);
});

app.post('/api/connect-wallet', (req, res) => {
  const { wallet } = req.body;
  if (!wallet) {
    return res.status(400).json({ success: false, message: 'Wallet name is required.' });
  }
  res.json({ success: true, message: `${wallet} wallet connected successfully` });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 NEW-GenX server running on port ${PORT}`);
  console.log(`🌐 http://localhost:${PORT}`);
});
