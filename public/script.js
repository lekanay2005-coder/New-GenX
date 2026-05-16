async function loadProducts() {
  try {
    const response = await fetch('/api/products');
    const products = await response.json();
    console.log('Products loaded', products);
  } catch (error) {
    console.error('Error loading products:', error);
  }
}

async function connectWallet(walletName) {
  try {
    const response = await fetch('/api/connect-wallet', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ wallet: walletName })
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error connecting wallet:', error);
  }
}

loadProducts();

document.querySelectorAll('.wallet').forEach((walletButton) => {
  walletButton.addEventListener('click', () => {
    connectWallet(walletButton.textContent.trim());
  });
});
