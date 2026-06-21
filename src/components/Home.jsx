import exoticCarLot from "../assets/images/exoticCarLot.avif";

function Home() {
  return (
    <section className="hero-section">
      <h1>Welcome to Lemon Aide Motors</h1>
      <p>Discover premium cars and manage inventory from the admin page.</p>
      <img src={exoticCarLot} alt="Exotic Car Lot" style={{ width: '100%', maxWidth: '700px', marginTop: '1rem' }} />
    </section>
  );
}

export default Home;
