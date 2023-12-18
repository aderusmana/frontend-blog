import React, { useEffect, useState } from "react";
import { BlogItem, ButtonPrimary, ButtonSuccess } from "../../components";
import "./home.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDataPosts } from "../../config/redux/action";


const Home = () => {
  const [counter,setCounter] = useState(1)
 const {dataPosts,page} = useSelector(state => state.homeReducer)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setDataPosts(counter))
    
  }, [counter,dispatch]);

  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1)
  }
  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1)
  }

  return (
    <div className="home-wrapper">
      <div className="create-wrapper">
        <ButtonSuccess
          title={"Create Post"}
          onClick={() => navigate("/create-post")}
        />
      </div>
      <div className="content-wrapper">
        {dataPosts.map((post) => (
          <BlogItem key={post._id} post={post} />
        ))}
      </div>
      <div className="pagination">
        <ButtonPrimary   title={"Previous"}  onClick={previous}  />
        <p className="text-page">{page.currentPage} / {page.totalPage}</p>
        <ButtonPrimary title={"Next"} onClick={next} />
      </div>
    </div>
  );
};

export default Home;
