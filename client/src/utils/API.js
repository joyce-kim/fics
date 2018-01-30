import axios from "axios";

export default {
  getFood: function (param) {
    const baseUrl = 'https://pixabay.com/api/';
    const key = 'null';
    let query = `${baseUrl}?key=${key}&q=${param}`
    axios
      .get(query)
      .then(response =>{
        return response.data
      })
      .catch(err => {
        return err
      }
    )
  }
}