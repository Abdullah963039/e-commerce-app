// hooks
import { useEffect, useState } from "react";
import { useStore } from "../../hooks";
import { UserAddressesHook } from "../Addresses";
import { useNavigate } from "react-router-dom";
// utils
import { notify } from "../../utils";

export default function PaymentFormHook() {
  const [cartId, setCartId] = useState(null); // Store Cart Id in state

  const navigate = useNavigate();

  const {
    getLoggedUserCart, // To get cart id
    createCashOrder, // To create cash Order
    cartPrice, // To display cart price
    cartPriceAfterDiscount, // To display cart price after discount if it exist
  } = useStore(); // Global Store

  //? Payment method handlers
  const [paymethod, setPaymethod] = useState("");
  const handleSelectPaymethod = (e) => setPaymethod(e.target.value);

  //? User addresses handlers
  const [shippingAddress, setShippingAddress] = useState("");
  const selectAddress = (e) => setShippingAddress(e.value);

  //? Use Effect ..
  useEffect(() => {
    getCartId();
  }, []);

  //? Payment Form Handler
  async function handlePaymentFormSubmit(e) {
    e.preventDefault();
    if (cartId === null) return;

    const res = await createCashOrder(cartId, { shippingAddress });

    console.log(res);

    if (res.status === 201) {
      notify("done", "تم إنشاء طلبك بنجاح");
      navigate("/user/orders");
      return;
    }

    if (res.status === 404) {
      notify("error", "تم إنشاء طلبك بالفعل ...");
      navigate("/");
      return;
    }

    // If request is not successful
    notify("error");
  }

  // ! XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

  //? Pay With Card Handler
  async function handlePayWithCard(cartId) {
    const response = await updateOrderToPaid(cartId);

    // todo HANDLE RETURNED RESPONSE STAUTS ...
    return response;
  }
  //? Pay On Deliver Handler
  async function handlePayOnDeliver(cartId) {
    const response = await updateOrderToDeliver(cartId);

    // todo HANDLE RETURNED RESPONSE STAUTS ...
    return response;
  }

  // Get cart functionality
  async function getCartId() {
    const cart = await getLoggedUserCart();

    setCartId(cart.data["_id"]);
  }

  const { allAddresses } = UserAddressesHook(); // Get all user addresses
  return {
    handlePaymentFormSubmit,
    handleSelectPaymethod,
    cartPrice,
    cartPriceAfterDiscount,
    allAddresses,
    shippingAddress,
    selectAddress,
  };
}
