import useFetch from "../hooks/useFetch";

function Catalog() {
  const { data: coffeeItems, loading, error } = useFetch("http://localhost:6001/coffee");

  return (
    <section className="catalog-page">
      <h2>Available Coffee</h2>
      {loading && <p>Loading coffee catalog...</p>}
      {error && <p>Unable to fetch coffee items.</p>}
      <div className="card-grid">
        {coffeeItems.map((item) => (
          <article key={item.id} className="card">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>
              <strong>Origin:</strong> {item.origin}
            </p>
            <p>
              <strong>Price:</strong> ${item.price.toFixed(2)}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Catalog;
