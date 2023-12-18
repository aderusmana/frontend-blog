import axios from "axios";

export const setForm = (formType, formValue) => {
  return { type: "SET_FORM_DATA", formType, formValue };
};

export const setImgPreview = (payload) => {
  return { type: "SET_IMG_PREVIEW", payload };
};

export const postToAPI = (form) => {
  return async () => {
    try {
      const data = new FormData();
      data.append("title", form.title);
      data.append("description", form.description);
      data.append("image", form.image);

      await axios.post(
        "http://localhost:4000/v1/api/createpost",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Create Post Success");
    } catch (err) {
      alert("Create Post Failed", err);
    }
  };
};

export const updateToAPI = (form, id) => {
  return async () => {
    try {
      const data = new FormData();
      data.append("title", form.title);
      data.append("description", form.description);
      data.append("image", form.image);

      await axios.patch(
        `http://localhost:4000/v1/api/post/${id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert("Update Post Success");
    } catch (err) {
      alert("Update Post Failed", err);
    }
  };
};
