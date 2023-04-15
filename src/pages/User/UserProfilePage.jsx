import UserChangePassword from "../../components/User/Profile/UserChangePassword";
import UserProfile from "../../components/User/Profile/UserProfile";

export default function UserProfilePage() {
  return (
    <>
      <h3 className="mb-3 text-xl font-bold">الصفحة الشخصية</h3>
      <UserProfile />
      <UserChangePassword />
    </>
  );
}
