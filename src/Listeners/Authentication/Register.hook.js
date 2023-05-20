// hooks
import { useReducer } from "react";
import { useRef } from "react";
import { useStore } from "../../hooks/useStore";
import { useNavigate } from "react-router-dom";
// utils
import notify from "../../utils/notifcation";

//? Regular Expressions
const emailRegex = /\w{4,}@\w{2,}\.\w{2,}/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,18}$/;
const upperRegex = /[A-Z]+/;
const lowerRegex = /[a-z]+/;
const numberRegex = /\d+/;

//? reducer
export const ACTIONS = {
  SET_NAME: "set-name",
  SET_TEL: "set-tel",
  SET_EMAIL: "set-email",
  SET_PASSWORD: "set-password",
  SET_CONF_PASS: "set-confirm-password",
};
const INIT_STATE = {
  name: "",
  phone: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

export const RegisterHook = () => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const navigator = useNavigate();

  //   Global Store
  const { createNewUser, loading, login } = useStore();

  //   Referances
  const nameTooltipRef = useRef(),
    phoneTooltipRef = useRef(),
    emailTooltipRef = useRef(),
    passwordTooltipRef = useRef(),
    passwordConfirmTooltipRef = useRef();

  const VALIDATION_PROPS = [
    state,
    nameTooltipRef,
    phoneTooltipRef,
    emailTooltipRef,
    passwordTooltipRef,
    passwordConfirmTooltipRef,
  ];

  // Sign up action
  async function handleRegister(e) {
    e.preventDefault();

    const isInputsComplete = checkInputValues(...VALIDATION_PROPS);

    if (!isInputsComplete) return;

    const res = await createNewUser(state);

    // Respone Fail Status ..
    if (res.status === 400) {
      if (res.data.errors[0].msg === "Invalid email formate") {
        notify("error", "صيغة البريد الالكتروني غير صحيحة");
      }
      if (res.data.errors[0].msg === "E-mail already in use") {
        notify("error", "هذا البريد مستخدم بالفعل !");
      }
      if (res.data.errors[0].msg === "accept only egypt phone numbers") {
        notify("error", "يجب ان يكون الرقم مصري مكون من 11 رقم");
      }
    }
    // Respone Success Status ..
    if (res.status === 201) {
      notify("done", "تم إنشاء الحساب بنجاح");
      login(state["email"], state["password"]);
      setTimeout(() => {
        navigator("/"); //todo Must Login And navigate to home page
      }, 1500);
    }
  }

  const changeName = (e) =>
    dispatch({ type: ACTIONS.SET_NAME, payload: e.target.value });
  const changePhone = (e) =>
    dispatch({ type: ACTIONS.SET_TEL, payload: e.target.value });
  const changeEmail = (e) =>
    dispatch({ type: ACTIONS.SET_EMAIL, payload: e.target.value });
  const changePassword = (e) =>
    dispatch({ type: ACTIONS.SET_PASSWORD, payload: e.target.value });
  const changeConfirmPassword = (e) =>
    dispatch({ type: ACTIONS.SET_CONF_PASS, payload: e.target.value });

  return {
    state,
    changeName,
    changeConfirmPassword,
    changeEmail,
    changePassword,
    changePhone,
    handleRegister,
    nameTooltipRef,
    phoneTooltipRef,
    emailTooltipRef,
    passwordTooltipRef,
    passwordConfirmTooltipRef,
    loading,
  };
};

//> Reducer Fn
function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.SET_NAME:
      return {
        ...state,
        name: payload,
      };
    case ACTIONS.SET_TEL:
      return {
        ...state,
        phone: payload,
      };
    case ACTIONS.SET_EMAIL:
      return {
        ...state,
        email: payload,
      };
    case ACTIONS.SET_PASSWORD:
      return {
        ...state,
        password: payload,
      };
    case ACTIONS.SET_CONF_PASS:
      return {
        ...state,
        passwordConfirm: payload,
      };

    default:
      return state;
  }
}

// Inputs Validation
function checkInputValues(
  state,
  nameTooltipRef,
  phoneTooltipRef,
  emailTooltipRef,
  passwordTooltipRef,
  passwordConfirmTooltipRef
) {
  let isInputsComplete = Object.values(state).every((value) => value !== "");

  if (!isInputsComplete) {
    notify("error", "أكمل البيانات بشكل صحيح من فضلك");

    if (state["name"].length < 3) {
      nameTooltipRef.current.style.opacity = "1";
      nameTooltipRef.current.innerText = "الاسم قصير جدا";
      setTimeout(() => {
        nameTooltipRef.current.style.opacity = "0";
      }, 3500);
      return false;
    }
    if (state["phone"].length != 11) {
      phoneTooltipRef.current.style.opacity = "1";
      phoneTooltipRef.current.innerText = "رقم الهاتف غير صالح";
      setTimeout(() => {
        phoneTooltipRef.current.style.opacity = "0";
      }, 3500);
      return false;
    }
    if (!emailRegex.test(state["email"])) {
      emailTooltipRef.current.style.opacity = "1";
      emailTooltipRef.current.innerText = "example@gmail.com";
      setTimeout(() => {
        emailTooltipRef.current.style.opacity = "0";
      }, 3500);
      return false;
    }
    if (!passwordRegex.test(state["password"])) {
      if (state["password"] === "") {
        passwordTooltipRef.current.style.opacity = "1";
        passwordTooltipRef.current.innerText = "ادخل كلمةالمرور من فضلك";
        setTimeout(() => {
          passwordTooltipRef.current.style.opacity = "0";
        }, 3500);
        return false;
      }
      if (state["password"].length < 6) {
        passwordTooltipRef.current.style.opacity = "1";
        passwordTooltipRef.current.innerText = "كلمة المرور قصيرة جدا";
        setTimeout(() => {
          passwordTooltipRef.current.style.opacity = "0";
        }, 3500);
        return false;
      }
      if (state["password"].length > 18) {
        passwordTooltipRef.current.style.opacity = "1";
        passwordTooltipRef.current.innerText = "كلمة المرور طويلة جدا";
        setTimeout(() => {
          passwordTooltipRef.current.style.opacity = "0";
        }, 3500);
        return false;
      }
      if (!upperRegex.test(state["password"])) {
        passwordTooltipRef.current.style.opacity = "1";
        passwordTooltipRef.current.innerText =
          "كلمة المرور يجب ان تحوي حرف كبير";
        setTimeout(() => {
          passwordTooltipRef.current.style.opacity = "0";
        }, 3500);
        return false;
      }
      if (!lowerRegex.test(state["password"])) {
        notify("error");
        passwordTooltipRef.current.style.opacity = "1";
        passwordTooltipRef.current.innerText =
          "كلمة المرور يجب ان تحوي حرف صغير";
        setTimeout(() => {
          passwordTooltipRef.current.style.opacity = "0";
        }, 3500);
        return false;
      }
      if (!numberRegex.test(state["password"])) {
        passwordTooltipRef.current.style.opacity = "1";
        passwordTooltipRef.current.innerText = "كلمة المرور يجب ان تحوي رقم";
        setTimeout(() => {
          passwordTooltipRef.current.style.opacity = "0";
        }, 3000);
        return false;
      }
    }

    if (state["passwordConfirm"] === "") {
      passwordConfirmTooltipRef.current.style.opacity = "1";
      passwordConfirmTooltipRef.current.innerText =
        "ادخل تأكيد كلمة المرور من فضلك";
      setTimeout(() => {
        passwordConfirmTooltipRef.current.style.opacity = "0";
      }, 3000);
      return false;
    }
  } else {
    if (state["password"] !== state["passwordConfirm"]) {
      passwordConfirmTooltipRef.current.style.opacity = "1";
      passwordConfirmTooltipRef.current.innerText = "كلمة المرور غير متطابقة";
      setTimeout(() => {
        passwordConfirmTooltipRef.current.style.opacity = "0";
      }, 3000);
      return false;
    }
  }

  return true;
}
