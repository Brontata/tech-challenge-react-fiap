import styled from "styled-components";

type PostProps = {
  post: {
    id?: number;
    title: string;
    image?: string;
    description: string;
    created_at: string;
  };
};

const Card = styled.div`
  width: 60%;
  padding-bottom: 100px;
  cursor: pointer;
`;

const CardBody = styled.div`
  height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Image = styled.img`
  width: 100%;
  height: 350px;
`;

export const Post = ({ post }: PostProps, key: number) => {
  return (
    <Card className="card" key={key}>
      <div className="card-header">{post.title}</div>
      <CardBody className="card-body">
        {
          post.image
            ? <Image src={post.image} alt="Post Image" className="img-fluid pad" />
            : <Image src="https://random-image-pepebigotes.vercel.app/api/random-image" alt="post.title" className="img-fluid pad"/>
        }
        <p className="card-text mt-3">{post.description}</p>
        <p>Posted: {post.created_at.split('T')[0].split('-').reverse().join('/')}</p>
      </CardBody>
    </Card>
  );
};
