import postsService from "../services/posts";
import Post  from "../types/Post";
import styled from "styled-components";
//import postsService from "../services/Posts";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  primary?: boolean;  // Prop opcional para estilos diferentes
}

const TableRow = styled.tr`
  &:hover {
    background-color: #dddddd;
  }
  &:nth-child(even) {
    background-color: #dddddd;
  }
`;

const Table = styled.table`
  border: 1px solid #ccc;
  border-collapse: collapse;
  width: 80%;
`;

const TableCell = styled.td`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

const TableHeadCell = styled.th`
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
`;

const StyledButton = styled.button<{ primary?: boolean }>`
  background-color: ${({ primary }) => (primary ? '#007BFF' : '#FFF')};
  color: ${({ primary }) => (primary ? '#FFF' : '#007BFF')};
  padding: 10px 20px;
  border: 2px solid #007BFF;
  border-radius: 5px;
  font-size: 16px;
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ primary }) => (primary ? '#0056b3' : '#e6f0ff')};
  }
`;

const Button: React.FC<ButtonProps> = ({ label, onClick, primary = false }) => {
  return <StyledButton onClick={onClick} primary={primary}>{label}</StyledButton>;
};

const handleClick = () => {
  alert('Botão clicado!');
};

const handleDelete = (idPost: number) => {
  postsService.deletePost(idPost);
  //window.location.reload();
  document.querySelector('.table-row-' + idPost)!.remove();
};

const PostsAdminTable = ({ posts }: { posts: Post[] }) => {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableHeadCell>ID</TableHeadCell>
          <TableHeadCell>User ID</TableHeadCell>
          <TableHeadCell>Title</TableHeadCell>
          <TableHeadCell>Description</TableHeadCell>
          <TableHeadCell>Slug</TableHeadCell>
          <TableHeadCell>Actions</TableHeadCell>
        </TableRow>
      </thead>
      <tbody>
        { posts.map((item, index) => (
          <TableRow key={index} className={`table-row-${item.id}`}>
            <TableCell>{item.id}</TableCell>
            <TableCell>{item.user_id}</TableCell>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.description}</TableCell>
            <TableCell>{item.slug}</TableCell>
            <TableCell>
              <Button label="Edit" onClick={handleClick} primary />
              <Button label="Delete" onClick={() => handleDelete(item.id)} primary />
              <Button label="Detail" onClick={handleClick} primary />
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};



// Estilos usando styled-components


// Componente funcional

export default PostsAdminTable;