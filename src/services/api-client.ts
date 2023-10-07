import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b110b41fd2d84f50a8644b432c7742e4",
  },
});
