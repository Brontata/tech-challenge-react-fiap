import { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Formik, Field, ErrorMessage } from 'formik';
import { Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import postsService from "../../services/posts";
import Post from "../../types/Post";

// Validação do formulário
const validationSchema = Yup.object({
    title: Yup.string().required('O campo título é obrigatório'),
    description: Yup.string().required('O campo texto é obrigatório'),
});

// Estilos
const StyledTitle = styled.h1`
    font-size: 2em;
    color: #333;
    display: flex;
    justify-content: center;
    font-family: sans-serif;
    padding: 16px 16px 0 16px;
`;

const StyledButton = styled.button`
    background-color: #3389d4;
    border-radius: 8px;
    border: #e0e0e0;
    width: 80%;
    height: 40px;
    margin: 1px 10% 1px 10%;
    font-family: sans-serif;
    color: #ffffff;
    margin-top: 16px;
`;

const FormStyle = styled(FormikForm)`
    background-color: #e0e0e0;
    border-radius: 32px;
    margin-top: 16px;
`;

const StyledInput = styled.div`
    width: 80%;
    margin: 1px 10% 1px 10%;
    display: inline-block;
    border-radius: 16px;
    box-sizing: border-box;
`;

const ErrorText = styled.p`
    margin: 0;
    color: red;
    font-size: 12px;
`;

const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 8px;
    border: none;
    padding: 0;
`;

const PageEditPost = () => {
    const navigate = useNavigate();
    const { currentPost } = useContext(PostContext) || { currentPost: undefined };

    const initialValues: Post = {
        user_id: Number(currentPost?.user_id),
        title: currentPost?.title ?? '',
        description: currentPost?.description ?? '',
        slug: currentPost?.slug ?? '',
        id: currentPost?.id ?? 0
    };

    const editPost = async (postValues: Post) => {
        postValues.slug = postValues.title.toLowerCase().replace(/ /g, '-');

        try {
            const request = await postsService.updatePost(Number(currentPost?.id), postValues);
            console.log('request = ', request);
            navigate('/admin');
        } catch (error) {
            console.error('Erro ao editar post:', error);
            alert('Erro ao editar post');
        }
    };

    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={editPost}
                validationSchema={validationSchema}
            >
                <FormStyle>
                    <StyledTitle> Editar Publicação</StyledTitle>
                    <hr></hr>
                    <div className="card-body">
                        <StyledInput>
                            <Fieldset>
                                <label htmlFor="title">Título</label>
                                <Field name="title" type="text" className="form-control" id="title" placeholder="Título" />
                                <ErrorMessage name="title" component={ErrorText} />
                            </Fieldset>
                        </StyledInput>

                        <StyledInput>
                            <div className="form-group">
                                <label htmlFor="description">Texto</label>
                                <Field as="textarea" name="description" className="form-control" rows={5} placeholder="Digite seu texto" />
                                <ErrorMessage name="description" component={ErrorText} />
                            </div>
                        </StyledInput>
                        <StyledButton type="submit">Salvar</StyledButton>
                        <StyledButton onClick={() => navigate('/admin')}>Cancelar</StyledButton>
                    </div>
                </FormStyle>
            </Formik>
        </>
    );
};

export default PageEditPost;
