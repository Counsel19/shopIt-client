import { useEffect, useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { TailSpin } from "react-loader-spinner";
import { useAppContext } from "../context/AppContext";

const CartItem = ({ cartInfo, cartQuantity, _id }) => {
  const [quantity, setQuantity] = useState(cartQuantity);
  const { updateUserCart, deleteUserCart, isLoading } = useAppContext();

  const [cartLoad, setCartLoad] = useState(false);

  useEffect(() => {
    const updateCart = async () => {
      if (quantity !== cartQuantity) {
        setCartLoad(true);
        await updateUserCart({ quantity, _id });
        setCartLoad(false);
      }
    };

    updateCart();
  }, [quantity]);

  const increaseQty = async () => {
    setQuantity(quantity + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div key={_id} className="flex border w-[100%] mt-3 justify-between p-2">
      <img src={cartInfo.image} className=" w-28 h-full object-contain " />
      <div className="mt-3">
        <h4 className="text-blue-900 font-semibold text-base mb-2">
          {cartInfo.name}
        </h4>
        <span className="line-through text-sm text-gray-500">
          ₦{cartInfo.actualPrice}
        </span>
        <h3 className="font-semibold text-base mb-2">
          ₦{cartInfo.sellingPrice}
        </h3>

        <span className=" cursor-pointer flex items-center text-rose-500" onClick={() => deleteUserCart(_id)}>
          <MdOutlineDeleteOutline size={22} />
          Delete
        </span>
      </div>
      <div className="flex flex-col justify-center gap-3 mt-4 p-3">
        <BiPlus
          onClick={increaseQty}
          size={19}
          className="bg-blue-900 text-white w-[35px] h-[35px] rounded cursor-pointer"
        />
        <h4 className="font-semibold text-xl text-center">
          {cartLoad ? <TailSpin width={20} height={20} /> : cartQuantity}
        </h4>
        <BiMinus
          onClick={decreaseQty}
          size={19}
          className={`bg-blue-900 text-white w-[35px] h-[35px] rounded ${
            quantity === 1
              ? " bg-blue-400 cursor-not-allowed"
              : " cursor-pointer "
          } `}
        />
      </div>
    </div>
  );
};

export default CartItem;
