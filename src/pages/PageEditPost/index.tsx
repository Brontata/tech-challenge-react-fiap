
import styled from "styled-components";
import {Formik,Field, ErrorMessage } from 'formik';
import { Form as FormikForm } from 'formik'
import * as Yup from 'yup';

interface MyFormValues {
    titulo: string;
    assunto: string;
    imagem: string;
    texto: string;
}

const validationSchema = Yup.object({
    titulo: Yup.string()
        .required('O campo título é obrigatório'),
    assunto: Yup.string()
        .required('O campo assunto é obrigatório')
        .test('not-select', "Por favor, selecione uma categoria", value => value !== ''),
    imagem: Yup.string()
        .required('O campo imagem é obrigatório'),
    texto: Yup.string()
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

const initialValues: MyFormValues = {
    titulo: '',
    assunto: '',
    imagem: '',
    texto: '',
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

const PageEditPost = () => {
    const editPost = (values: MyFormValues) => {
        console.log('Iniciou handle');
        console.log('createPost => ', values);
    }

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
                                    <label htmlFor="titulo">Título</label>
                                    <Field name="titulo" type="text" className="form-control" id="titulo" placeholder="Título" />
                                    <ErrorMessage name="titulo" component={ErrorText} />
                                </Fieldset>
                        </StyledInput>

                        <StyledInput>
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

                        <StyledInput>
                            <div className="form-group">
                                <label htmlFor="texto">Texto</label>
                                <Field as="textarea" name="texto" className="form-control" rows={5} placeholder="Digite seu texto" />
                                <ErrorMessage name="texto" component={ErrorText} />
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

export default PageEditPost;