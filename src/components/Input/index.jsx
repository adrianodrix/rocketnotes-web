import { Container } from "./style"

export function Input({ icon: Icon, ...rest}) {
    return (
        <Container>
            {Icon && <Icon size="1.2rem" />}
            <input {...rest} />
        </Container>
    )
}