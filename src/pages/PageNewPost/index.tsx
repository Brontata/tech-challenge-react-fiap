import styled from "styled-components";

const PageNewPost = () => {
    
    const StyledTitle  = styled.h1`
    font-size: 2.5em;
    margin: 0;
    color: #333;
    `

    const StyledButton = styled.div`
    margin-top: 16px;
    
    `
    
    return (
        <>
        <StyledTitle>Novo Post</StyledTitle>
        <form>
            <div className="card-body">

                <div className="form-group">
                    <label htmlFor="title">Título</label>
                    <input type="text" className="form-control" id="title" placeholder="Título" />
                </div>

                <textarea className="form-control" rows={5} placeholder="Sobre o que voce deseja publicar?"></textarea>
            <StyledButton>
                <button type="submit" className="btn btn-primary">Salvar</button>
            </StyledButton>
            </div>
        </form>


        </>
    );
}

export default PageNewPost;