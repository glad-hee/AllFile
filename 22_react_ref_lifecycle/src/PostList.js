import { useEffect, useState } from "react";
import PostItem from "./PostItem";
import axios from "axios";
import "./PostItem.css";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  // 1
  useEffect(() => {
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
    }).then((res) => {
      console.log(res);
      setPosts(res.data.slice(0, 10));
    });
  }, []);

  // 2
  // const getPost = async () => {
  //   const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //   console.log(res);
  // };

  const dataLoading = () => {
    return <h2>Loading</h2>;
  };

  return (
    <div className="PostList">
      <header>📨 Post List</header>
      {/* 변수로 따로 저장해서 불러오면 읽기편함 */}
      {posts.length == 0 ? dataLoading() : <PostItem data={posts} />}
    </div>
  );
};

export default PostList;
