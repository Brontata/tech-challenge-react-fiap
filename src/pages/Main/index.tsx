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
    width: 100%; /* Card ocupa todo o espaço horizontal em dispositivos móveis */
    margin-left: 0;
  }
`;

const Posts = styled.div`
  width: 100%;
  max-width: 800px;
`;

const Main: React.FC = () => {
  const { isLogged } = useAuth();
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const getPosts = async () => {
        const response = await postsService.getPosts();
        setPosts(response.reverse()); //Reverse utilizado para mostrar os posts do mais novo para o mais antigo
    }

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

  return (
    <Container isLogged={isLogged}>
      <div>
        <h1>Últimas postagens</h1>
      </div>
      <Posts>
        {posts.map((post) => (
          <div key={post.id} onClick={() => handleCardClick(post)}>
            <Post post={post} />
          </div>
        ))}
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
