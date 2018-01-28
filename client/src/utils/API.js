import axios from "axios";
import filterParams from "./filterParams";

export default {
  getFood: function (params) {
    return axios.get("/api/food", {
      params: filterParams(params)
    });
  }
};