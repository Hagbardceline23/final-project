import axios from "axios";
export default {
  saveEmail: function (userData) {
    console.log(userData)
    return axios.post("/api/dailyOffering", userData);
  }
};