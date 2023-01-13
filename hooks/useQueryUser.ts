import { useEffect, useState } from "react";
import { User } from "../types";
import { useUser } from "@web3sdks/react";

const useQueryUser = () => {
  const { user: web3sdksUser } = useUser();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/user", {
          method: "GET",
        });
        const user = await response.json();
        setUser(user);
      } catch (error) {}
    };

    fetchUser();
  }, [web3sdksUser]);

  return user;
};

export { useQueryUser };
