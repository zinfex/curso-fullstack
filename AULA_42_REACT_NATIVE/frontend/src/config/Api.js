import axios from "axios";
import Util from "./Util";

const Api = axios.create({
  baseURL: "http://localhost:8081/",
});

const getToken = async () => {
    const token = await Util.getToken()
    Api.defaults.headers['token'] = token;
}
getToken()
export default Api;