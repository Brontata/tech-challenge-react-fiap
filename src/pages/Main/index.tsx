import { useEffect, useState } from "react";
import styled from "styled-components";
import { Post } from "../../components/Post";
import { useAuth } from "../../hooks/useAuth";
import postsService from "../../services/posts";

// Styled Components
const Container = styled.div<{ isLogged: boolean }>`
  margin-top: -50px;
  justify-content: center;
  align-items: center; /* Centraliza verticalmente */
  margin-left: 100px;
  
`;

const Posts = styled.div`
  width: 100%;
  max-width: 800px; /* Limita a largura máxima para manter um bom layout */
  
`;

const Main = () => {
  const { isLogged } = useAuth();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
        const response = await postsService.getPosts();
        setPosts(response)
    }

    getPosts();
  }, []);

  return (
    <Container isLogged={isLogged}>
      <div>
        <h1>Posts</h1>
      </div>
      {
        posts.map(post => (
          <Post post={post} />
        ))
      }
    </Container>
  );
};

export default Main;
