// components
import { Link } from "react-router-dom";
import ConfirmMessage from "../../Utility/ConfirmMessage";
// icons
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
// hooks
import AddressHook from "../../../Listeners/Addresses/Address.hook";

export default function SingleAddress({ address }) {
  const { closeModal, handleDeleteAddress, openModal, showModal } =
    AddressHook();
  const { alias, details, phone, _id } = address;

  return (
    <>
      <ConfirmMessage
        controller={showModal}
        closeModal={closeModal}
        itemId={_id}
        deleteItem={handleDeleteAddress}
        modalMessage={`هل أنت متأكد من حذف العنوان : ${alias}`}
      />
      <div className="flex w-full items-start justify-between rounded-lg bg-white p-4">
        {/* Address Details */}
        <div className="flex basis-5/6 flex-col justify-between gap-4">
          {/* Address Alias */}
          <div className="text-2xl font-bold">{alias}</div>
          {/* Address Description */}
          <p className="indent-1 text-slate-700">{details}</p>
          {/* Phone Number */}
          <p>
            رقم الهاتف: <span className="text-slate-700">{phone}</span>
          </p>
        </div>
        {/* Address Controllers */}
        <div className="flex items-center justify-between gap-4">
          <Link to={`edit/${_id}`}>
            <div className="flex cursor-pointer items-center gap-1 hover:text-yellow-500">
              <AiFillEdit /> تعديل
            </div>
          </Link>
          <div
            className="flex cursor-pointer items-center gap-1 hover:text-red-500"
            onClick={openModal}
          >
            <AiFillDelete /> إزالة
          </div>
        </div>
      </div>
    </>
  );
}
