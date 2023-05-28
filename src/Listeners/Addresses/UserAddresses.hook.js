// hooks
import { useEffect, useState } from "react";
import { useStore } from "../../hooks/useStore";

export default function UserAddressesHook() {
  const [allAddresses, setAllAddresses] = useState([]);

  const { getUserAddresses } = useStore();

  async function getAddresses() {
    try {
      const res = await getUserAddresses();
      setAllAddresses(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAddresses();

    return () => {
      setAllAddresses([]);
    };
  }, []);

  return { allAddresses };
}
