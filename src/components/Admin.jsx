import { useEffect, useState } from "react";

function Admin() {
  const [carItems, setCarItems] = useState([]);
  const [formData, setFormData] = useState({ name: "", description: "", origin: "", price: "" });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:6001/cars")
      .then((r) => r.json())
      .then((data) => setCarItems(data));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const parsedPrice = parseFloat(formData.price);
    const payload = {
      name: formData.name,
      description: formData.description,
      origin: formData.origin,
      price: Number.isNaN(parsedPrice) ? 0 : parsedPrice,
    };

    const requestOptions = {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    };

    if (editingId) {
      fetch(`http://localhost:6001/cars/${editingId}`, {
        method: "PATCH",
        ...requestOptions,
      })
        .then((r) => r.json())
        .then((updated) => {
          setCarItems((current) => current.map((item) => (item.id === updated.id ? updated : item)));
          setEditingId(null);
          setFormData({ name: "", description: "", origin: "", price: "" });
        });
      return;
    }

    fetch("http://localhost:6001/cars", {
      method: "POST",
      ...requestOptions,
    })
      .then((r) => r.json())
      .then((created) => {
        setCarItems((current) => [...current, created]);
        setFormData({ name: "", description: "", origin: "", price: "" });
      });
  }

  function handleEdit(item) {
    setEditingId(item.id);
    setFormData({
      name: item.name,
      description: item.description,
      origin: item.origin,
      price: item.price.toString(),
    });
  }

  return (
    <section className="admin-page">
      <h2>Admin Inventory</h2>
      <form className="admin-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Description
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </label>
        <label>
          Origin
          <input name="origin" value={formData.origin} onChange={handleChange} required />
        </label>
        <label>
          Price
          <input
            name="price"
            value={formData.price}
            onChange={handleChange}
            type="number"
            step="0.01"
            required
          />
        </label>
        <button type="submit">{editingId ? "Save Changes" : "Add Car"}</button>
      </form>

      <div className="card-grid">
        {carItems.map((item) => (
          <article key={item.id} className="card">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>
              <strong>Origin:</strong> {item.origin}
            </p>
            <p>
              <strong>Price:</strong> ${item.price.toFixed(2)}
            </p>
            <button type="button" onClick={() => handleEdit(item)}>
              Edit
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Admin;
