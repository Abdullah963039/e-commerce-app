import ReactPaginate from "react-paginate";

const BUTTONS_STYLE =
  "btn py-1 px-3 border-slate-700 text-slate-900 hover:bg-slate-700 hover:text-white duration-150 z-10";

export default function Pagination({ totalPages = 0, onClick }) {
  const handlePageClick = (btn) => {
    onClick(btn.selected + 1);
  };

  return (
    <div className="mx-auto flex w-1/2 items-center justify-center gap-2">
      <ReactPaginate
        nextLabel="التالي"
        breakLabel=".."
        previousLabel="السابق"
        pageCount={totalPages}
        onPageChange={handlePageClick}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        containerClassName="flex gap-2 items-center justify-center p-4"
        pageClassName="z-0"
        breakClassName={BUTTONS_STYLE}
        nextLinkClassName={BUTTONS_STYLE}
        previousLinkClassName={BUTTONS_STYLE}
        pageLinkClassName={BUTTONS_STYLE}
        activeLinkClassName="bg-slate-700 text-white"
      />
    </div>
  );
}
