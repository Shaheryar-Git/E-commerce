import React from "react";
import { useParams } from "react-router-dom";
import shoes from "../datas/Shoes";
import { Link } from "react-router-dom";

const Detailpage = () => {
  let { shoesID } = useParams(); // Get the ID from the route params
  let Shoes = shoes.find((ele) => ele.id.toString() === shoesID); // Find the shoe object based on the ID

  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100"
      style={{
        background: "linear-gradient(to right, #1e3c72, #2a5298)",
        color: "#fff",
      }}
    >
      <div
        className="container p-4 rounded shadow-lg"
        style={{
          backgroundColor: "#ffffff",
          maxWidth: "700px",
        }}
      >
        <div className="row">
          {/* Product Image */}
          <div className="col-md-7 col-sm-12 d-flex justify-content-center align-items-center">
            <img
              src={Shoes.image}
              alt="Product"
              className="img-fluid rounded shadow"
              style={{
                height: "350px",
                objectFit: "cover",
                transition: "transform 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>

          {/* Product Details */}
          <div className="col-md-5 col-sm-12 text-center d-flex flex-column justify-content-center"  style={{ color: "#333" }}>
            <h2 className="fw-bold mb-3">
              {Shoes.brand}
            </h2>
            <p className="mb-2 ">
              <strong>Price:</strong> {Shoes.price}
            </p>
            <p className="mb-2">
              <strong>Condition:</strong> {Shoes.condition}
            </p>
            <p className="mb-3">
              <strong>Size:</strong> {Shoes.size}
            </p>

            <Link to="/">
              <button
                className="btn btn-dark btn-lg px-4 py-2 rounded-pill"
                style={{
                  backgroundColor: "#333",
                  border: "none",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#555")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#333")
                }
              >
                Back 
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detailpage;
