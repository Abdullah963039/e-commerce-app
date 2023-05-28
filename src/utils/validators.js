const emailRegex = /\w{4,}@\w{2,}\.\w{2,}/;

export const isEmailValid = (email) => emailRegex.test(email);

const upperRegex = /[A-Z]+/;
const lowerRegex = /[a-z]+/;
const numberRegex = /\d+/;

export function isPasswordValid(password = "") {
  let errors = [];

  if (password.length < 6)
    errors.push("كلمة السر يجب أن تكون 6 أحرف على الاقل");

  if (!upperRegex.test(password)) errors.push("يجب أن تحتوي على حرف كبير");
  if (!lowerRegex.test(password)) errors.push("يجب أن تحتوي على حرف صغير");
  if (!numberRegex.test(password)) errors.push("يجب أن تحتوي على رقم");

  return errors.length === 0
    ? { valid: true, errors }
    : { valid: false, errors };
}

export function isPhoneValid(phone) {
  return phone.length === 11;
}
