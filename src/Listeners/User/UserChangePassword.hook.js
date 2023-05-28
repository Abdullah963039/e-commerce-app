// hooks
import { useRef } from "react";
import { useStore } from "../../hooks/useStore";
// utils
import { isPasswordValid } from "../../utils/validators";
import notify from "../../utils/notifcation";

export default function UserChangePasswordHook() {
  const currentPasswordRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const { updateUserPassword } = useStore(); // Global store

  async function handleUpdatePassword(e) {
    e.preventDefault();
    const [password, passwordConfirm, currentPassword] = [
      passwordRef.current.value,
      passwordConfirmRef.current.value,
      currentPasswordRef.current.value,
    ];

    // Check from old password field
    if (currentPassword === "") {
      notify("error", "اكتب كلمة المرور القديمة من فضلك");
      return; // Exit from proccess
    }

    // Compare password and new password -- Check from new password field
    if (currentPassword === password || password === "") {
      notify("error", "اكتب كلمة مرور جديدة من فضلك ");
      return; // Exit from proccess
    }

    const { valid, errors } = isPasswordValid(password); // Check from new password

    if (!valid) {
      errors.forEach((error) => notify("error", error)); // Throw notification errors
      return; // Exit from proccess
    }

    // Compare new password and its confirmation
    if (passwordConfirm === "") {
      notify("error", "أكد كلمة المرور من فضلك");
      return; // Exit from proccess
    }

    // Compare new password and its confirmation
    if (password !== passwordConfirm) {
      notify("error", "كلمة المرور غير متطابقة");
      return; // Exit from proccess
    }

    // Note : there is problem with server side
    // It take old password as new , and new as old
    // todo Check from values ...
    const res = await updateUserPassword({
      currentPassword,
      password,
      passwordConfirm,
    });

    if (res.status === 200) notify("done", "تم تغيير كلمة المرور بنجاح");

    /**
     * res.status === 400 :=> {value: 'ىثص', msg: 'Incorrect current password', param: 'password', location: 'body'}
     */

    console.log(res);
  }

  return {
    currentPasswordRef,
    passwordRef,
    passwordConfirmRef,
    handleUpdatePassword,
  };
}
