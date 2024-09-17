import styled from "styled-components";

type PostProps = {
  title: string;
  image: string;
  description: string;
  created: string;
};

const Card = styled.div`
  width: 60%;
  padding-bottom: 100px;
  cursor: pointer;
`;

const CardBody = styled.div`
  height: 360px;
`;

const Image = styled.img`
  width: 100%;
  height: 350px;
`;

export const Post = ({ post }: PostProps) => {
  return (
    <Card className="card">
      <div className="card-header">{post.title}</div>
      <CardBody className="card-body">
        <Image src={post.image} alt="Post Image" className="img-fluid pad" />
        <p className="card-text mt-3">{post.description}</p>
        <p>Posted: {post.created.split("-").reverse().join("/")}</p>
      </CardBody>
    </Card>
  );
};
