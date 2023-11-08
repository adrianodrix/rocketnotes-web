import { Container } from "./styles"

export function ButtonText({ title , active = false, ...rest }) {
    return (
        <Container 
            type="button" 
            $active={active.toString()}
            {...rest}>
            {title}
        </Container>
    )
}