import { useEffect, useState } from "react";
import PostsAdminTable from "../../components/PostsAdminTable";
import postsService from "../../services/posts";
import Post from "../../types/Post";

const AdminView = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const posts = await postsService.getPosts();
        setPosts(posts);
      } catch (error) {
        console.error(error);
      }
    }
    loadPosts();
  }, [])
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (!e.target.value) {
      setFilteredPosts(posts);
    } else {
      const filteredPosts = posts.filter(post => post.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()) || post.description.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
      setFilteredPosts(filteredPosts);
    }
  }
  return (
    <>
      <h1>Gerenciamento de Posts</h1>
      <form>
        <input type="search" name="search" placeholder="Pesquisar post" value={search} onChange={handleSearch} />
      </form>
      <PostsAdminTable posts={filteredPosts.length > 0 ? filteredPosts : posts}></PostsAdminTable>
    </>
  )
};

export default AdminView;

