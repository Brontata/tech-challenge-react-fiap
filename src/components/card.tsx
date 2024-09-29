import styled from 'styled-components'
import Post from '../types/Post';

// Estilos usando styled-components
const CardWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 16px;
  padding: 16px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
  margin-bottom: 8px;
`;

const CardTitle = styled.h3`
  font-size: 1.5em;
  margin: 0;
  color: #333;
`;

const CardTools = styled.div`
  .badge {
    background-color: #6c757d;
    color: white;
    padding: 5px 10px;
    border-radius: 12px;
    font-size: 0.875em;
  }
`;

const CardBody = styled.div`
  font-size: 1em;
  color: #555;
  margin-bottom: 16px;
`;

const CardFooter = styled.div`
  font-size: 0.875em;
  color: #888;
  text-align: right;
`;

const IdUserWrapper = styled.div`
  font-size: 0.875em;
  color: #888;
  margin-bottom: 8px;
`;

const Card = ({ id, user_id, title, description, slug }: Post) => {
  return (
    <CardWrapper>
      <IdUserWrapper>{'id: ' + id}</IdUserWrapper>
      <IdUserWrapper>{'user_id: ' + user_id}</IdUserWrapper>
      
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardTools>
          <span className="badge">Ver Post</span>
        </CardTools>
      </CardHeader>
      
      <CardBody>{description}</CardBody>
      <CardFooter>{slug}</CardFooter>
    </CardWrapper>
  );
};

export default Card;
