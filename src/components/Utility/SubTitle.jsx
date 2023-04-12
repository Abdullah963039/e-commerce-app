import { Link } from "react-router-dom";

const SubTitle = ({ title, href = "/", buttonContent }) => {
  return (
    <div className="container my-5 flex items-center justify-between py-2 text-xs sm:text-base md:text-3xl">
      <h3>{title}</h3>
      {buttonContent && (
        <Link to={href} className="text-decoration-none">
          <button className="btn border-sky-400 px-3 py-1 text-xs text-sky-400 hover:bg-sky-400  hover:text-slate-100 sm:text-base xl:px-6 ">
            {buttonContent}
          </button>
        </Link>
      )}
    </div>
  );
};

export default SubTitle;
