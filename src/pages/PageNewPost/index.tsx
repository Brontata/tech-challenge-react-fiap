

import styled from "styled-components";
import { Formik, Field, ErrorMessage } from 'formik';
import { Form as FormikForm } from 'formik'
import * as Yup from 'yup';
import postsService from "../../services/posts";
import Post from "../../types/Post";
import { useNavigate } from "react-router-dom";


const validationSchema = Yup.object({
    title: Yup.string()
        .required('O campo título é obrigatório'),
    description: Yup.string()
        .required('O campo texto é obrigatório'),
})



const StyledTitle = styled.h1`
    font-size: 2em;
    color: #333;
    display: flex;
    justify-content: center;
    font-family: sans-serif;
    padding: 16px 16px 0 16px;
    `

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
    `

const FormStyle = styled(FormikForm)`
    background-color:  #e0e0e0;;
    border-radius: 32px;
    margin-top: 16px;
    `

const StyledInput = styled.div`
    width: 80%;
    margin: 1px 10% 1px 10%;
    display: inline-block;
    border-radius: 16px;
    box-sizing: border-box;
    `

const initialValues: Post = {
    user_id: 0,
    title: '',
    description: '',
    slug: '',
};

const ErrorText = styled.p`
    margin: 0;
    color: red;
    font-size: 12px;
`

const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    gap: 8px;
    border: none;
    padding: 0;
`

const PageNewPost = () => {


    const navigate = useNavigate();

    console.log('TESTE')
    const createPost = async (postValues: Post) => {
        console.log('Iniciou handle');
        console.log('createPost => ', postValues);

        postValues.slug = postValues.title.toLowerCase().replace(/ /g, '-');
        //postValues.slug = postValues.slug.replace(/[^\w-]+/g, '');

        try {
            const newPost = await postsService.createPost(postValues);
            console.log('newPost => ', newPost);
            console.log('status = ', newPost.status);
            console.log('Post criado com sucesso');
            navigate('/');
        }catch(error){
            console.error('Erro ao criar post:', error);

        }
    }

    return (
        <>

            <Formik
                initialValues={initialValues}
                onSubmit={createPost}
                validationSchema={validationSchema}
            >
                <FormStyle>

                    <StyledTitle> Nova Publicação</StyledTitle>
                    <hr></hr>
                    <div className="card-body">

                        <StyledInput>
                            <Fieldset>
                                <label htmlFor="title">Título</label>
                                <Field name="title" type="text" className="form-control" id="title" placeholder="Título" />
                                <ErrorMessage name="title" component={ErrorText} />
                            </Fieldset>
                        </StyledInput>

                        {/*  <StyledInput>
                            <div className="form-group">
                                <label htmlFor="assunto">Assunto</label>
                                <Field as="select" name="assunto" className="form-control select2 select2-hidden-accessible" data-select2-id="1" aria-hidden="true" defaultValue={"Selecione"}>
                                    <option value="" label="Selecione" data-select2-id="33" />
                                    <option value="História" label="História" data-select2-id="34" />
                                    <option value="Portugues" label="Portugues" data-select2-id="34" />

                                </Field>
                                <ErrorMessage name="assunto" component={ErrorText} />

                            </div>
                        </StyledInput>
                        

                        <StyledInput>
                            <div className="form-group">
                                <label htmlFor="imagem">Imagem</label>
                                <Field name="imagem" type="text" className="form-control" id="imagem" placeholder="Adicione o caminho da imagem" />
                            </div>
                        </StyledInput>
                        */}

                        <StyledInput>
                            <div className="form-group">
                                <label htmlFor="description">Texto</label>
                                <Field as="textarea" name="description" className="form-control" rows={5} placeholder="Digite seu texto" />
                                <ErrorMessage name="description" component={ErrorText} />
                            </div>
                        </StyledInput>
                        <StyledButton type="submit">
                            Salvar
                        </StyledButton>
                    </div>
                </FormStyle>
            </Formik>


        </>
    );
}

export default PageNewPost;