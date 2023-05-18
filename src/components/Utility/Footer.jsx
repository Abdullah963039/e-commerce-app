import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsTelephoneFill,
} from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-slate-50 py-4 shadow-inner">
      <div className="container">
        <div
          direction="horizontal"
          className="flex items-center justify-between text-slate-600"
        >
          <div className="flex gap-4">
            <span>الشروط و الاحكام</span>
            <span>سياسة الخصوصية</span>
            <span>اتصل بنا</span>
          </div>
          <div className="flex gap-2">
            <BsTelephoneFill />
            <BsFacebook />
            <BsInstagram />
            <BsTwitter />
          </div>
        </div>
      </div>
    </footer>
  );
}
