import { useEffect, useState } from "react";
import styled from "styled-components";
import { Post } from "../../components/Post";
import { useAuth } from "../../hooks/useAuth";
import postsService from "../../services/posts";
import ModalComponent from "../../components/ModalComponent";

interface PostType {
  id: number;
  title: string;
  description: string;
  author: string;
  image: string;
  created_at?: Date | undefined;
}

const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isLogged',
})<{ isLogged: boolean }>`
  margin-top: -50px;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

const Posts = styled.div`
  width: 100%;
  max-width: 800px;
`;

const SearchBar = styled.input`
  width: 50%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
    @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

const Main: React.FC = () => {
  const { isLogged } = useAuth();
  const [posts, setPosts] = useState<PostType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getPosts = async () => {
      const response = await postsService.getPosts();
      setPosts(response.reverse());
    };

    getPosts();
  }, []);

  const [selectedPost, setSelectedPost] = useState<PostType | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCardClick = (post: PostType) => {
    setSelectedPost(post);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container isLogged={isLogged}>
      <div>
        <h1>Últimas postagens</h1>
      </div>
      
      {/* Barra de Pesquisa */}
      <SearchBar
        type="text"
        placeholder="Pesquisar postagens..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <Posts>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div key={post.id} onClick={() => handleCardClick(post)}>
              <Post post={post} />
            </div>
          ))
        ) : (
          <p>Nenhum post encontrado.</p>
        )}
      </Posts>

      {/* Modal */}
      {selectedPost && (
        <ModalComponent
          open={isModalOpen}
          onClose={handleCloseModal}
          post={selectedPost}
        />
      )}
    </Container>
  );
};

export default Main;
