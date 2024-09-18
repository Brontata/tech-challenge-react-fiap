import "./style";
import { Container, Nav, Posts } from "./style";
import Logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { Post } from "../../components/Post";

const Main = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Post 1",
      description: "Description 1",
      image: "https://via.placeholder.com/150",
      created: "2021-01-01",
    },
  ]);
  useEffect(() => {}, []);
  return (
    <Container>
      <Nav>
        <img src={Logo} alt="Logo" id="logo" />
        <ul>
          <li>
            <a href="" className="nav-link text-white">
              Login
            </a>
          </li>
        </ul>
      </Nav>
      <Posts>
        <h1>Posts</h1>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Posts>
    </Container>
  );
};

export default Main;
