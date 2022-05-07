import { useCallback, useState } from "react";
import { user } from "../types/api/user";

type Props = {
  id: number;
  users: Array<user>;
  onOpen: () => void;
};

export const useSelectUser = () => {
  const [selectedUser, setSlectedUser] = useState<user | null>();
  const onSelectUser = useCallback((props: Props) => {
    const { id, users, onOpen } = props;
    const targetUser = users.find((user) => user.id === id);
    setSlectedUser(targetUser);
    onOpen();
  }, []);

  return { onSelectUser, selectedUser };
};
