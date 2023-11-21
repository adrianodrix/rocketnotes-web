import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
    grid-area: header;
    height: 6.5rem;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;

    padding: 0 5rem;
`

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    overflow: hidden;

    > img {
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        object-fit: cover;
    }

    > div {
        display: flex;
        flex-direction: column;
        margin-left: 1rem;
        line-height: 1.5rem;

        span {
            font-size: 0.8rem;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        strong {
            font-size: 1.2rem;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
    }
`

export const Logout = styled.button`
    border: none;
    background: none;

    > svg {
        color: ${({ theme }) => theme.COLORS.GRAY_100};
        font-size: 2.2rem;
    }
`