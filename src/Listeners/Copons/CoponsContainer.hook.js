// hooks
import { useEffect, useState } from "react";
import { useStore } from "../../hooks";

export const CoponsContainerHook = () => {
  const [allCopons, setAllCopons] = useState([]);
  const [rerender, setRerender] = useState(false); // state for make rerender when deleting products

  const rerenderComponent = () => setRerender(!rerender); // rerender component handler

  const { getAllCopons, getAllCoponsByPage } = useStore(); // Global store

  async function getCopons() {
    const res = await getAllCopons();
    setAllCopons(res);
  }

  useEffect(() => {
    getCopons();

    return () => {
      setAllCopons([]);
    };
  }, [rerender]);

  const paginationController = async (page) => {
    const res = await getAllCoponsByPage(page);
    setAllCopons(res);
  };

  return {
    allCopons,
    paginationController,
    rerenderComponent,
  };
};
