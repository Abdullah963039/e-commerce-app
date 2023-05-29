import { UserChangePassword, UserProfile } from "../../components/User";

export default function UserProfilePage() {
  return (
    <>
      <h3 className="mb-3 text-xl font-bold">الصفحة الشخصية</h3>
      <UserProfile />
      <UserChangePassword />
    </>
  );
}
