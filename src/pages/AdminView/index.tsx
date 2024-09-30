import { useEffect, useState } from "react";
import PostsAdminTable from "../../components/PostsAdminTable";
import postsService from "../../services/posts";
import Post from "../../types/Post";
import styled from "styled-components";

const TableContainer = styled.div`
  overflow-x: auto;
`;

const SearchBar = styled.input`
  width: 80%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const AdminView = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const posts = await postsService.getPosts();
        setPosts(posts);
        setFilteredPosts(posts); // Inicialmente, todos os posts são exibidos
      } catch (error) {
        console.error(error);
      }
    }
    loadPosts();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    const searchTerm = e.target.value.toLowerCase();
    const filtered = posts.filter(post =>
      post.title.toLowerCase().includes(searchTerm) ||
      post.description.toLowerCase().includes(searchTerm)
    );
    setFilteredPosts(filtered);
  }

  return (
    <>
      <h1>Gerenciamento de Posts</h1>

      {/* Barra de Pesquisa */}
      <SearchBar
        type="search"
        name="search"
        placeholder="Pesquisar post"
        value={search}
        onChange={handleSearch}
      />

      <TableContainer>
        <PostsAdminTable posts={filteredPosts || posts} />
        {filteredPosts.length === 0 && (
          <h2>Nenhum post encontrado.</h2>)
        }
      </TableContainer>
    </>
  );
};

export default AdminView;
