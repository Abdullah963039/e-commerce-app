import { Link } from "react-router-dom";

const SubTitle = ({ title, href = "/", buttonContent }) => {
  return (
    <div className="container my-5 flex items-center justify-between py-2 text-xl sm:text-2xl md:text-3xl">
      <h3>{title}</h3>
      {buttonContent && (
        <Link to={href} className="text-decoration-none">
          <button className="btn border-slate-700 px-4 py-1 text-xs text-slate-700 hover:bg-slate-700  hover:text-slate-100 sm:text-base xl:px-6 ">
            {buttonContent}
          </button>
        </Link>
      )}
    </div>
  );
};

export default SubTitle;
