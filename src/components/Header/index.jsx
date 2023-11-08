import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles"

export function Header() {
    return (
        <Container>
            <Profile to='/me'>
                <img src="http://github.com/adrianodrix.png" alt="Avatar" />
                <div>
                    <span>Welcome,</span>
                    <strong>Adriano Santos</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}