import React, { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import Aos from "aos";
import "../../src/components/Home.css";
import shoes from '../datas/Shoes';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/action";
import { toast } from "react-toastify";
import Intro from './Intro';
import Footer from './Footer';
import AboutUs from './AboutUs';

const Home = () => {
  const [loaders, setLoaders] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoaders(false);
    }, 2000);
    Aos.init();
    Aos.refresh();
  }, []);

  let dispatch = useDispatch();
  const addedItem = useSelector((state) => state.CartReducer.carts);

  const sendItem = (e) => {
    const cartAlready = addedItem.some((item) => item.id === e.id);
    if (cartAlready) {
      toast.warning("Item Already Added !", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "text-center fw-bolder",
      });
    } else {
      dispatch(addToCart(e));
      toast.success("Item Added To Cart !", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "text-center fw-bolder",
      });
    }
  };

  if (loaders) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <ClipLoader color={"#ef0e0e"} loading={loaders} size={100} />
      </div>
    );
  }

  return (
   <div>
      <Intro/>
      <AboutUs/>
     <div className="container  mt-5" id="Products" style={{backgroundcolor: "#e8f5e9" }}>
      <h1 className="text-center mb-4">Products</h1>
      <div className="row">
        {shoes.map((ele) => {
          return (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={ele.id}>
              <div className="card shadow-lg h-100" data-aos="fade-up" data-aos-duration="1000" style={{ borderRadius: "15px" }}>
                <img
                  src={ele.image}
                  className="card-img-top"
                  style={{ height: "15rem", objectFit: "cover", borderRadius: "15px 15px 0 0" }}
                  alt={ele.brand}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold text-center">{ele.brand}</h5>
                  <h5 className="card-text text-dark fw-semibold fs-5 text-center">{ele.size}</h5>
                  <h5 className="text-center text-dark fw-bold ">Rs:{ele.price}</h5>

                  <div className="d-flex justify-content-between mt-3">
                    <Link
                      onClick={() => sendItem(ele)}
                      className="btn  py-2 btn-secondary text-white "
                      style={{ borderRadius: "20px", flex: 1, marginRight: "8px" }}
                    >
                      Add to Cart
                    </Link>
                    <Link
                      to={`/product-details/${ele.id}`}
                      className="btn  py-2 btn-secondary text-white"
                      style={{ borderRadius: "20px", flex: 1 }}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <Footer />
   </div>
  );
};

export default Home;
