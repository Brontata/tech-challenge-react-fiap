import styled from "styled-components";
import { formatDate } from "../utils/dateTimeUtils";
import { limitString } from "../utils/stringUtils";

type PostProps = {
  post: {
    id?: number;
    title: string;
    image?: string;
    description: string;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
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
        {post.image ? (
          <Image src={post.image} alt="Post Image" className="img-fluid pad" />
        ) : (
          <Image
            src="https://random-image-pepebigotes.vercel.app/api/random-image"
            alt="post.title"
            className="img-fluid pad"
          />
        )}
        <p className="card-text mt-3">
          {limitString(post.description, 100)}
        </p>
        <p>
          <strong>Criado em:</strong>{" "}
          {post.created_at ? formatDate(new Date(post.created_at)) : 'Data não disponível'}
        </p>
        <p>
          <strong>Atualizado em:</strong>{" "}
          {post.updated_at ? formatDate(new Date(post.updated_at)) : 'Data não disponível'}
        </p>
      </CardBody>
    </Card>
  );
};
