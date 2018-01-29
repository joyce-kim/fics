import axios from "axios";

export default {
  getFood: function (param) {
    return axios.get(`/api/f/find?food=${param}`);
  }
};