import ReactPaginate from "react-paginate";

const BUTTONS_STYLE =
  "btn py-1 px-3 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white duration-150";

export default function Pagination() {
  const totalPages = 100; // !
  const handlePageClick = () => {}; //!
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
        pageClassName={BUTTONS_STYLE}
        previousClassName={BUTTONS_STYLE}
        nextClassName={BUTTONS_STYLE}
        breakClassName={BUTTONS_STYLE}
        activeClassName="bg-sky-500 text-white"
      />
    </div>
  );
}
