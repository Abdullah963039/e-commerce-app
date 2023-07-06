// hooks
import { useEffect, useState, useMemo } from "react";
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
    checkoutSessions, // To create order with credit card
    cartPrice, // To display cart price
    cartPriceAfterDiscount, // To display cart price after discount if it exist
    loading,
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

    if (cartId == null) return;

    if (paymethod === "") {
      notify("error", "اختر طريقة الدفع من فضلك ..");
      return;
    }

    if (paymethod === "cash") {
      return await handleCreateCashOrder();
    }

    if (paymethod === "card") {
      return await handleCreateCashOrderWithCreditCard();
    }
  }

  //? Handle creating cash order ...
  async function handleCreateCashOrder() {
    const res = await createCashOrder(cartId, { shippingAddress });

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
  //? Handle pay with credit card ...
  async function handleCreateCashOrderWithCreditCard() {
    const res = await checkoutSessions(cartId);

    if (res.status == "success") {
      open(res.session.url);
      return;
    }

    if (res.status == 403) {
      notify("error", "هذه الخدمة غير متوفرة في بلدك");
      return;
    }
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
    loading,
  };
}
