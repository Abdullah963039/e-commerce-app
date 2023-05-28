import { AiFillEdit } from "react-icons/ai";
import UserProfileHook from "../../../Listeners/User/UserProfile.hook";
import { EditProfileModal } from "../../Utility/ConfirmMessage";

export default function UserProfile() {
  const {
    user,
    loading,
    editProfileModal,
    openModal,
    closeModal,
    refs,
    handleEditProfile,
  } = UserProfileHook();
  return (
    <>
      <EditProfileModal
        controller={editProfileModal}
        onClose={closeModal}
        onSubmit={handleEditProfile}
        loading={loading}
        refs={refs}
        placeholders={{
          name: user?.name,
          email: user?.email,
          phone: user?.phone,
        }}
      />
      <div className="flex w-full items-start justify-between rounded-lg bg-white p-2">
        {/* User Details */}
        <div className="flex basis-5/6 flex-col justify-between gap-4">
          {/* User Name */}
          <p>
            الاسم: <span className="text-slate-700">{user?.name}</span>
          </p>
          {/* Phone Number */}
          <p>
            رقم الهاتف: <span className="text-slate-700">{user?.phone}</span>
          </p>
          {/* User Email */}
          <p>
            البريد الالكتروني:{" "}
            <span className="text-slate-700">{user?.email}</span>
          </p>
        </div>
        {/* Address Controllers */}
        <div className="flex basis-1/6 items-center justify-end">
          <div
            onClick={openModal}
            className="flex cursor-pointer items-center gap-1 hover:text-yellow-500"
          >
            <AiFillEdit /> تعديل
          </div>
        </div>
      </div>
    </>
  );
}
