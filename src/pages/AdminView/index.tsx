import { useEffect, useState } from "react";
import PostsAdminTable from "../../components/PostsAdminTable";
import postsService from "../../services/posts";

 const dataPosts = [
  {
    id: 1,
    user_id: 1,
    title: "Post 1",
    description: "Description 1",
    slug: "post-1",
  },
  {
    id: 2,
    user_id: 2,
    title: "Post 2",
    description: "Description 2",
    slug: "post-2",
  },
  {
    id: 3,
    user_id: 1,
    title: "Post 3",
    description: "Description 3",
    slug: "post-3",
  }
 ]
//const dataPosts = await postsService.getPosts()
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
