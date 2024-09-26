import { useEffect, useState } from "react";
import PostsAdminTable from "../../components/PostsAdminTable";
import postsService from "../../services/posts";

const AdminView = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const loadPosts = async () => {
      const posts = await postsService.getPosts();
      setPosts(posts);
    }
    loadPosts();
  }, [])
  return (
    <>
      <h1>Gerenciamento de Posts</h1>
      <PostsAdminTable posts={posts}></PostsAdminTable>
    </>
  )
};


export default AdminView;
