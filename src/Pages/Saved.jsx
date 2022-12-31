import React, { useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const productList = [
  {
    _id: "1",
    img:
      "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/V/V/161794_1658741959.jpg",
    desc: "Nokia C20 (TA-1352 DS) 6.5 HD+ Display, 2GB RAM + 16GB ROM",
    actual_price: "62,000",
    disc_price: "45,000",
  },
  {
    _id: "2",
    img:
      "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/V/V/161794_1658741959.jpg",
    desc: "Nokia C20 (TA-1352 DS) 6.5 HD+ Display, 2GB RAM + 16GB ROM",
    actual_price: "62,000",
    disc_price: "45,000",
  },
  {
    _id: "3",
    img:
      "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/V/V/161794_1658741959.jpg",
    desc: "Nokia C20 (TA-1352 DS) 6.5 HD+ Display, 2GB RAM + 16GB ROM",
    actual_price: "62,000",
    disc_price: "45,000",
  },
  {
    _id: "4",
    img:
      "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/V/V/161794_1658741959.jpg",
    desc: "Nokia C20 (TA-1352 DS) 6.5 HD+ Display, 2GB RAM + 16GB ROM",
    actual_price: "62,000",
    disc_price: "45,000",
  },
];

const Saved = () => {
  const { userSaved, getUserSaved } = useAppContext();

  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      if (user) {
        await getUserSaved();
      } else {
        navigate("/login", { replace: true });
      }
    };

    getData();
  }, []);


  return (
    <div className="save__for__later mx-20 mt-20">
      <div>
        <h2 className="text-2xl mb-4">Saved Items</h2>
        <hr />
      </div>
      <div className="rounded-lg">
        {productList.map((product) => (
          <div
            key={product._id}
            className="flex justify-between rounded-2xl  border mb-6 p-3 saved-items mt-4"
          >
            <img src={product.img} alt={product.desc} className="w-[95px]" />
            <div className="ml-[-350px]">
              <h4 className="text-blue-900 font-semibold text-base mb-2">
                {product.desc}
              </h4>
              <span className="line-through text-sm text-gray-500">
                {product.actual_price}
              </span>
              <h3 className="font-semibold text-base mb-2">
                ${product.disc_price}
              </h3>
            </div>
            <div className="flex w-32 cursor-pointer items-center hover:text-red-600">
              {/* <button className="bg-green-600 text-white font-bold px-4 py-3 rounded">Available</button> */}
              <AiOutlineDelete size={25} className="cursor-pointer" />{" "}
              <span>DELETE</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Saved;
