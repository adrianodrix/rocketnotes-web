import styled from 'styled-components'

export const Container = styled.span`
    font-size: 0.7rem;
    padding: 0.3rem 0.8rem;
    border-radius: 0.3rem;
    margin-right: 0.3rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    background: ${({ theme }) => theme.COLORS.ORANGE};
`