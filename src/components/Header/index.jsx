import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles"
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'
import { useNavigate } from 'react-router-dom'

export function Header() {
    const { signOut, user } = useAuth()
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const navigate = useNavigate()

    function handleSignOut() {
        navigate('/')
        signOut()
    }

    return (
        <Container>
            <Profile to='/me'>
                <img src={avatarUrl} alt="Avatar" />
                <div>
                    <span>Welcome,</span>
                    <strong>{user.name}</strong>
                </div>
            </Profile>

            <Logout onClick={handleSignOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}