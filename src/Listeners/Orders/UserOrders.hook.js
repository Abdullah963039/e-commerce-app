// hooks
import { useEffect, useState } from "react";
import { useStore } from "../../hooks";

export default function UserOrdersHook() {
  const { getAllOrders } = useStore(); // Global Store

  const [orders, setOrders] = useState([]); // Store order items
  const [numberOfPages, setNumberOfPages] = useState(0); // Store number of pages <Pagingation>

  //? useEffect ..
  useEffect(() => {
    // Make Request To Get All Orders ..
    getOrders();
  }, []);

  // Get all orders functionality
  async function getOrders(page = 1) {
    const { data, paginationResult } = await getAllOrders(page);

    // Store the results
    setOrders(data);

    // Store Number Of Pages
    if (numberOfPages != paginationResult.numberOfPages)
      setNumberOfPages(paginationResult.numberOfPages);
  }

  // Pagination Handler ..
  const getPageNumber = (pageNumber) => getOrders(pageNumber);

  return { orders, numberOfPages, getPageNumber };
}
