import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateProduct() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [tags, setTags] = useState("");
  const [images, setImages] = useState([]);
  const [shopId, setShopId] = useState("");  // Automatically populated
  const [shopName, setShopName] = useState("");  // Automatically populated

  const navigate = useNavigate();

  useEffect(() => {
    // Assuming you fetch the shopkeeper details for the logged-in user
    const fetchShopDetails = async () => {
      try {
        const response = await axios.get("/api/shopkeeper/details");  // Endpoint to fetch logged-in shopkeeper details
        setShopId(response.data.shopId);
        setShopName(response.data.shopName);
      } catch (error) {
        console.error("Error fetching shop details", error);
      }
    };
    fetchShopDetails();
  }, []);

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tagsArray = tags.split(",").map((tag) => tag.trim());

    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("tags", tagsArray);

    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    try {
      const response = await axios.post("https://localhost:44326/api/Product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        alert("Product created successfully!");
        navigate("/products");
      }
    } catch (error) {
      console.error("Error creating product", error);
      alert("Error creating product.");
    }
  };

  return (
    <div>
      <h2>Create New Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div>
          <label>Tags (comma-separated):</label>
          <input type="text" value={tags} onChange={(e) => setTags(e.target.value)} />
        </div>
        <div>
          <label>Images:</label>
          <input type="file" multiple onChange={handleImageChange} required />
        </div>
        <div>
          <label>Shop ID (hidden):</label>
          <input type="text" value={shopId} disabled />
        </div>
        <div>
          <label>Shop Name (hidden):</label>
          <input type="text" value={shopName} disabled />
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}
