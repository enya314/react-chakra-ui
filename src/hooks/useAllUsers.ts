import axios from "axios";
import { useCallback, useState } from "react";
import { user } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<user>>([]);
  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<user>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch(() => {
        showMessage({ title: "ユーザ取得に失敗しました。", status: "error" });
      })
      .finally(() => setLoading(false));
  }, []);
  return { getUsers, loading, users };
};
