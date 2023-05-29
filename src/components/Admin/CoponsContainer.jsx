// components
import { Copon } from "./";
import { Pagination } from "../Utility";
import { ToastContainer } from "react-toastify";
// hooks
import { CoponsContainerHook } from "../../Listeners/Copons";

export function CoponsContainer() {
  const { allCopons, paginationController } = CoponsContainerHook();

  return (
    <>
      {allCopons == undefined ? (
        <>
          <div className="my-12 text-center text-2xl text-slate-800">
            لا يوجد كوبونات لعرضها
          </div>
        </>
      ) : (
        <div className="my-4 flex flex-col gap-4">
          {allCopons?.data?.map((copon) => (
            <Copon copon={copon} key={copon["_id"]} />
          ))}

          <div className="self-center justify-self-end">
            {allCopons?.paginationResult?.["numberOfPages"] > 0 && (
              <Pagination
                totalPages={allCopons?.paginationResult?.["numberOfPages"]}
                onClick={paginationController}
              />
            )}
          </div>
        </div>
      )}
      <ToastContainer rtl />
    </>
  );
}
