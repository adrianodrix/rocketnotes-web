import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 6.5rem auto;
    grid-template-areas: 
    "header"
    "content";
    
    > main {
        grid-area: content;
        overflow-y: scroll;
        padding: 4rem;
    }
`

export const Links = styled.ul`
    list-style: none;

    > li {
        margin-top: 1rem;

        a {
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`

export const Content = styled.div`
    max-width: 36rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    > button:first-child {
        align-self: end;
    }

    > h1 {
        font-size: 2.2rem;
        font-weight: 500;
        padding-top: 4rem;
    }

    > p {
        font-size: 1rem;
        margin-top: 1rem;
        text-align: justify;
    }
`