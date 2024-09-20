import { useState } from "react";
import styled from "styled-components";
import { Post } from "../../components/Post";
import { useAuth } from "../../hooks/useAuth";

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
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Post 1",
      description: "Description 1",
      image: "https://via.placeholder.com/150",
      created: "2021-01-01",
    },
    {
      id: 1,
      title: "Post 1",
      description: "Description 1",
      image: "https://via.placeholder.com/150",
      created: "2021-01-01",
    },
  ]);

  return (
    <Container isLogged={isLogged}>
      <div>

        <h1>Posts</h1>
      </div>
      <Posts>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Posts>
    </Container>
  );
};

export default Main;
