import { useContext } from "react";
import {
  LoginUserContext,
  LoginUserType
} from "../providers/LoginUserProvider";

export const useLoginUser = (): LoginUserType => useContext(LoginUserContext);
