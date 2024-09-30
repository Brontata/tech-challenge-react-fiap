import postsService from "../services/posts";
import Post  from "../types/Post";
import styled from "styled-components";
//import postsService from "../services/Posts";
import { useContext, useState } from "react"; 
import { PostContext } from "../context/PostContext";
import { useNavigate } from "react-router-dom";
import ModalComponent from "./ModalComponent";
import { formatDate } from "../utils/dateTimeUtils";
import { limitString } from "../utils/stringUtils";

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

const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'primary', // Impede que o `primary` seja passado para o DOM
})<{ primary?: boolean }>`
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

const PostsAdminTable = ({ posts }: { posts: Post[] }) => {
  const { setCurrentPost } = useContext(PostContext) || { currentPost: undefined, setCurrentPost: () => {console.log('Erro no context')} };

  const navigate = useNavigate();
  
  const handleEdit = (postToEdit: Post) => {
    setCurrentPost(postToEdit);
    navigate('/editPost')
  }

  const handleDelete = (idPost: number) => {
    postsService.deletePost(idPost);
    document.querySelector('.table-row-' + idPost)!.remove();
  };
  
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCardClick = (post: Post) => {
    setSelectedPost(post);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Table>
        <thead>
          <TableRow>
            <TableHeadCell>ID</TableHeadCell>
            <TableHeadCell>Author</TableHeadCell>
            <TableHeadCell>Title</TableHeadCell>
            <TableHeadCell>Description</TableHeadCell>
            <TableHeadCell>Slug</TableHeadCell>
            <TableHeadCell>Created At</TableHeadCell>
            <TableHeadCell>Updated At</TableHeadCell>
            <TableHeadCell>Actions</TableHeadCell>
          </TableRow>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <TableRow key={index} className={`table-row-${post.id}`}>
              <TableCell>{post.id}</TableCell>
              <TableCell>{post.author}</TableCell>
              <TableCell>{post.title}</TableCell>
              <TableCell>{limitString(post.description, 120)}</TableCell>
              <TableCell>{post.slug}</TableCell>
              <TableCell>{post.created_at ? formatDate(new Date(post.created_at)) : '-'}</TableCell>
              <TableCell>{post.updated_at ? formatDate(new Date(post.updated_at)) : '-'}</TableCell>
              <TableCell> 
                <Button label="Edit" onClick={() => handleEdit(post)} primary />
                <Button
                  label="Delete"
                  onClick={() => handleDelete(post.id ?? 0)}
                  primary
                />
                <Button label="Detail" onClick={() => handleCardClick(post)}/>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      {selectedPost && (
        <ModalComponent
          open={isModalOpen}
          onClose={handleCloseModal}
          post={selectedPost}
        />
      )}
    </>
  );
};

export default PostsAdminTable;