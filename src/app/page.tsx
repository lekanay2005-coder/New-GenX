
export default function Home() {
  return (
    <main>

      <nav className="navbar">

        <div className="logo">
          <div className="logo-icon">N</div>

          <div className="logo-text">
            <h2>NEW-<span>GenX</span></h2>
            <p>INNOVATE. CONNECT. THRIVE.</p>
          </div>
        </div>

        <div className="search-box">
          🔍
          <input type="text" placeholder="Search products, collections, and more..." />
        </div>

        <div className="nav-links">
          <a href="#">Marketplace</a>
          <a href="#">Stores</a>
          <a href="#">Categories</a>
          <a href="#">Sell</a>
          <a href="#">Dashboard</a>
        </div>

        <button className="wallet-btn">Connect Wallet</button>

      </nav>

      <section className="hero">

        <div className="container">

          <div className="hero-grid">

            <div>

              <div className="tag">⚡ Built on Solana</div>

              <h1>
                The Marketplace <br />
                of the <span>Next Generation</span>
              </h1>

              <p>
                Buy, sell, and own digital & physical products securely
                on the Solana blockchain.
              </p>

              <div className="hero-buttons">
                <button className="primary-btn">Explore Marketplace</button>
                <button className="secondary-btn">Start Your Store</button>
              </div>

              <div className="hero-features">
                <span>✔ Decentralized</span>
                <span>✔ Secure</span>
                <span>✔ Low Fees</span>
                <span>✔ NFT Receipts</span>
              </div>

            </div>

            <div className="hero-image">

              <div className="glow-circle"></div>

              <div className="hero-card">
                <h2>NEW-GenX</h2>
                <p>INNOVATE. CONNECT. THRIVE.</p>
              </div>

            </div>

          </div>

          <div className="stats">

            <div className="stat-box">
              <h4>Total Volume</h4>
              <h2>$2,543,839</h2>
              <span className="green">+12.5%</span>
            </div>

            <div className="stat-box">
              <h4>Total Sales</h4>
              <h2>18,392</h2>
              <span className="green">+8.3%</span>
            </div>

            <div className="stat-box">
              <h4>Total Users</h4>
              <h2>9,482</h2>
              <span className="green">+15.7%</span>
            </div>

            <div className="stat-box">
              <h4>Active Stores</h4>
              <h2>1,204</h2>
              <span className="green">+11.2%</span>
            </div>

            <div className="stat-box">
              <h4>SOL Price</h4>
              <h2>$162.35</h2>
              <span className="green">+3.8%</span>
            </div>

          </div>

          <div className="main">

            <div>

              <div className="section">

                <div className="section-header">
                  <h2>Featured Products</h2>
                  <a href="#" className="view-all">View all →</a>
                </div>

                <div className="products">

                  <div className="product-card">
                    <div className="product-img"></div>

                    <div className="product-content">
                      <h3>Cyberpunk Hoodie</h3>
                      <p>By TechWear • 4.8 ⭐</p>
                      <div className="price">50 SOL</div>
                    </div>
                  </div>

                  <div className="product-card">
                    <div className="product-img"></div>

                    <div className="product-content">
                      <h3>Lo-Fi Beats Pack</h3>
                      <p>By BeatMaker • 4.9 ⭐</p>
                      <div className="price">25 USDC</div>
                    </div>
                  </div>

                  <div className="product-card">
                    <div className="product-img"></div>

                    <div className="product-content">
                      <h3>Abstract Dreams #1</h3>
                      <p>By Artistry • 5.0 ⭐</p>
                      <div className="price">2.50 SOL</div>
                    </div>
                  </div>

                  <div className="product-card">
                    <div className="product-img"></div>

                    <div className="product-content">
                      <h3>UI/UX Design Service</h3>
                      <p>By DesignPro • 4.9 ⭐</p>
                      <div className="price">150 USDC</div>
                    </div>
                  </div>

                  <div className="product-card">
                    <div className="product-img"></div>

                    <div className="product-content">
                      <h3>Web3 Developer eBook</h3>
                      <p>By CodeMaster • 4.7 ⭐</p>
                      <div className="price">15 USDC</div>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            <div>

              <div className="section">

                <div className="section-header">
                  <h2>Top Sellers</h2>
                </div>

                <div className="seller">
                  <div className="seller-left">
                    <div className="avatar"></div>

                    <div>
                      <h4>TechWear</h4>
                      <p>$234,567 Sales</p>
                    </div>
                  </div>
                </div>

                <div className="seller">
                  <div className="seller-left">
                    <div className="avatar"></div>

                    <div>
                      <h4>Artistry</h4>
                      <p>$189,432 Sales</p>
                    </div>
                  </div>
                </div>

                <div className="seller">
                  <div className="seller-left">
                    <div className="avatar"></div>

                    <div>
                      <h4>CodeMaster</h4>
                      <p>$156,789 Sales</p>
                    </div>
                  </div>
                </div>

              </div>

              <div className="section">

                <div className="wallet-box">

                  <h2>Connect Wallet</h2>

                  <p>
                    Connect your wallet to start buying,
                    selling, and managing your store.
                  </p>

                  <button className="wallet-btn">
                    Connect Wallet
                  </button>

                  <div className="wallets">
                    <div className="wallet">Phantom</div>
                    <div className="wallet">Solflare</div>
                    <div className="wallet">Backpack</div>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
    </main>
  );
}
