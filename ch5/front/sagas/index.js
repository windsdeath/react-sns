import { all, call } from "redux-saga/effects";
import user from "./user";
import post from "./post";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3065/api/"; // post에도 적용이됨! -> 노드에서 모듈을 캐싱하기때문에 여기서 설정해도 post에도 적용됨
export default function* rootSaga() {
  yield all([call(user), call(post)]);
}
