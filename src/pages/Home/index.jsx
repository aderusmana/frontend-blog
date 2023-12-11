import React from "react";
import { BlogItem, ButtonPrimary, ButtonSuccess } from "../../components";
import "./home.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-wrapper">
      <div className="create-wrapper">
        <ButtonSuccess
          title={"Create Post"}
          onClick={() => navigate("/create-post")}
        />
      </div>
      <div className="content-wrapper">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <div className="pagination">
        <ButtonPrimary title={"Previous"} />
        <ButtonPrimary title={"Next"} />
      </div>
    </div>
  );
};

export default Home;
