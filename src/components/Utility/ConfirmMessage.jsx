// components
import ReactStars from "react-rating-stars-component";
// icons
import { BsStar, BsStarHalf, BsStarFill } from "react-icons/bs";

export default function ConfirmMessage({
  controller = false,
  deleteItem,
  closeModal,
  itemId = "",
  modalMessage,
}) {
  return (
    <>
      {controller && (
        <div className="fixed left-0 top-0 z-10 flex h-full w-screen flex-col items-center justify-start py-8 backdrop-blur-sm">
          <div className="flex h-1/3 w-1/2 flex-col justify-between gap-2 rounded-lg bg-slate-100 p-4 shadow-lg">
            <div className="text-2xl font-bold">
              {modalMessage || "هل انت متأكد من حذف المنتج ؟"}
            </div>
            <div className="flex w-full flex-wrap items-center justify-end gap-2">
              <button
                onClick={closeModal}
                className="btn border-slate-700 px-4 py-1 text-xs text-slate-700 hover:bg-slate-700 hover:text-slate-100 sm:text-base xl:px-6 "
              >
                تراجع
              </button>
              <button
                onClick={() => deleteItem(itemId)}
                className="btn border-red-700 px-4 py-1 text-xs text-red-700 hover:bg-red-700  hover:text-red-100 sm:text-base xl:px-6 "
              >
                حذف
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export function ConfirmEditModal({
  controller = false,
  editItem,
  closeModal,
  stars,
  setStars,
  commentValue,
  onChangeComment,
}) {
  const RATING_SETTINGS = {
    size: 20,
    count: 5,
    isHalf: true,
    value: stars,
    color: "rgb(234 179 8)",
    activeColor: "rgb(234 179 8)",
    emptyIcon: <BsStar className="far fa-star" />,
    halfIcon: <BsStarHalf className="fa fa-star-half-alt" />,
    filledIcon: <BsStarFill className="fa fa-star" />,
    onChange: (newValue) => {
      setStars(newValue);
    },
  };

  return (
    <>
      {controller && (
        <div className="fixed left-0 top-0 z-10 flex h-full w-screen flex-col items-center justify-start py-8 backdrop-blur-sm">
          <div className="flex min-h-max w-1/2 flex-col justify-between gap-2 rounded-lg bg-slate-50 p-4 shadow-lg">
            <div className="text-2xl font-bold">هل تريد من تعديل التعليق ؟</div>
            <div className="my-4 flex flex-col items-center gap-4">
              <ReactStars {...RATING_SETTINGS} />
              <textarea
                type="text"
                rows={2}
                value={commentValue}
                onChange={onChangeComment}
                placeholder="عدل التعليق"
                className="w-4/5 rounded-lg p-2 px-4 ring-1 ring-slate-400 focus-within:ring-2 focus-within:ring-slate-400"
              ></textarea>
            </div>
            <div className="flex w-full flex-wrap items-center justify-end gap-2">
              <button
                onClick={closeModal}
                className="btn border-slate-700 px-4 py-1 text-xs text-slate-700 hover:bg-slate-700 hover:text-slate-100 sm:text-base xl:px-6 "
              >
                تراجع
              </button>
              <button
                onClick={editItem}
                className="btn border-yellow-600 px-4 py-1 text-xs text-yellow-600 hover:bg-yellow-600  hover:text-white sm:text-base xl:px-6 "
              >
                حفظ
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function EditProfileModal({
  controller = false,
  onClose,
  onSubmit,
  refs,
  placeholders = {
    name: "",
    email: "",
    phone: "",
  },
  loading = false,
}) {
  let nameRef, emailRef, phoneRef;
  if (refs != undefined) {
    nameRef = refs.nameRef;
    emailRef = refs.emailRef;
    phoneRef = refs.phoneRef;
  }

  return (
    <>
      {controller && (
        <div className="fixed left-0 top-0 z-10 flex h-full w-screen flex-col items-center justify-center py-8 backdrop-blur-sm">
          <div className="flex min-h-fit w-full flex-col justify-between gap-2 rounded-lg bg-slate-50 p-4 shadow-lg sm:w-1/2">
            <div className=" font-bold xs:text-2xl">تعديل الصفحة الشخصية</div>
            <form
              onSubmit={onSubmit}
              className="my-2 flex flex-col gap-2 xs:my-4 xs:gap-4 xs:p-4"
              id="edit-prfoile"
            >
              <div className="flex flex-col gap-4">
                <label htmlFor="username" className="text-xs xs:text-base">
                  الاسم :
                </label>
                <input
                  ref={nameRef}
                  type="text"
                  id="username"
                  placeholder={placeholders.name}
                  className="rounded-sm p-2 px-4 text-center text-xs ring-1 ring-slate-300 focus-within:ring-2 focus-within:ring-slate-400 xs:text-base "
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="useremail" className="text-xs xs:text-base">
                  البريد الالكتروني :
                </label>
                <input
                  ref={emailRef}
                  type="text"
                  id="useremail"
                  placeholder={placeholders.email}
                  className="rounded-sm p-2 px-4 text-center text-xs ring-1 ring-slate-300 focus-within:ring-2 focus-within:ring-slate-400 xs:text-base "
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="userphone" className="text-xs xs:text-base">
                  الهاتف :
                </label>
                <input
                  ref={phoneRef}
                  type="text"
                  id="userphone"
                  placeholder={placeholders.phone}
                  className="rounded-sm p-2 px-4 text-center text-xs ring-1 ring-slate-300 focus-within:ring-2 focus-within:ring-slate-400 xs:text-base "
                />
              </div>
            </form>
            <div className="flex w-full flex-wrap items-center justify-center gap-2 xs:justify-end">
              <button
                onClick={onClose}
                className="btn border-slate-700 px-4 py-1 text-xs text-slate-700 hover:bg-slate-700 hover:text-slate-100 sm:text-base xl:px-6 "
              >
                تراجع
              </button>
              <button
                disabled={loading}
                type="submit"
                form="edit-prfoile"
                className="btn border-yellow-600 px-4 py-1 text-xs text-yellow-600 hover:bg-yellow-600  hover:text-yellow-100 sm:text-base xl:px-6 "
              >
                حفظ التغييرات
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
