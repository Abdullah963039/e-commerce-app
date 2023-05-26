// components
import AdminAddCopon from "../../components/Admin/AdminAddCopon";
import { CoponsContainer } from "../../components/Admin/CoponsContainer";

export default function AdminAddCoponPage() {
  return (
    <>
      <h3 className="mb-3 text-xl font-bold">اضف كوبون جديد</h3>
      {/* Create copon form */}
      <AdminAddCopon />
    </>
  );
}
