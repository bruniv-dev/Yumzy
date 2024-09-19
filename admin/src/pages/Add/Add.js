import React, { useState } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios";

// import { useEffect } from "react";

const Add = () => {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const onSubmitHandler = async (event) => {
    const url = "http://localhost:5000";
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("image", image);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(false);
    } else {
    }
  };

  return (
    <div className="add">
      <form className="flex-col" onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_grey}
              alt=""
            />
            <input
              type="file"
              id="image"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
              hidden
              required
            />
          </label>
        </div>
        <div className="add-product-name flex-col">
          <p>Product Name</p>
          <input
            type="text"
            name="name"
            placeholder="Type here"
            onChange={onChangeHandler}
            value={data.name}
          />
        </div>
        <div className="add-product-description flex-col">
          <p>Product description</p>
          <textarea
            rows="6"
            name="description"
            placeholder="Write Content"
            required
            onChange={onChangeHandler}
            value={data.description}
          ></textarea>
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>product category</p>
            <select name="category" onChange={onChangeHandler}>
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input
              type="Number"
              placeholder="&#8377;20"
              onChange={onChangeHandler}
              value={data.price}
              name="price"
            />
          </div>
        </div>
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
