import axios from "axios";

export const setDataPosts = (page) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:4000/v1/api/posts?page=${page}&perPage=4`)
      .then((res) => {
        const response = res.data;

        dispatch({ type: "UPDATE_DATA_POST", payload: response.data });
        dispatch({
          type: "UPDATE_PAGE",
          payload: {
            currentPage: response.current_page,
            totalPage: Math.ceil(response.total_posts / response.per_page),
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
