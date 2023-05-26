// components
import { Link } from "react-router-dom";
import ConfirmMessage from "../Utility/ConfirmMessage";
// icons
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
// hooks
import { CoponHook } from "../../Listeners/Copons/Copon.hook";
// utils
import { dateFormatter } from "../../utils/formatter";

export default function Copon({ copon }) {
  const { openModal, closeModal, handleDeleteCopon, showModal } = CoponHook();

  return (
    <>
      <ConfirmMessage
        controller={showModal}
        closeModal={closeModal}
        itemId={copon["_id"]}
        deleteItem={handleDeleteCopon}
        modalMessage="هل تريد حذف هذا الكوبون؟"
      />

      <div className="flex flex-col gap-6 rounded-lg bg-white px-4 py-2 shadow-md">
        <div className="flex items-center justify-between">
          {/* Copon Name */}
          <div className="space-x-4 space-x-reverse">
            <span className="text-slate-700">اسم الكوبون :</span>
            <span className="text-lg font-semibold">{copon["name"]}</span>
          </div>
          <div className="flex items-center gap-4">
            <div
              className="group flex cursor-pointer items-center gap-1"
              onClick={openModal}
            >
              <AiFillDelete className="text-slate-500 group-hover:text-red-500" />

              <span className="text-slate-500 group-hover:text-red-500">
                إزالة
              </span>
            </div>
            <Link to={`../edit-copon/${copon["_id"]}`}>
              <div className="group flex cursor-pointer items-center gap-1">
                <AiFillEdit className="text-slate-500 group-hover:text-yellow-500" />
                <span className="text-slate-500 group-hover:text-yellow-500">
                  تعديل
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div className="space-x-4 space-x-reverse">
          <span className="text-slate-700">تاريخ الانتهاء :</span>
          <span className="text-lg font-semibold">
            {dateFormatter(copon["expire"])}
          </span>
        </div>
        <div className="space-x-4 space-x-reverse">
          <span className="text-slate-700">نسبة الحسم :</span>
          <span className="text-lg font-semibold">{copon["discount"]}%</span>
        </div>
      </div>
    </>
  );
}
