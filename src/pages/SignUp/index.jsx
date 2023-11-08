import { Link } from 'react-router-dom'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Background, Container, Form } from "./style"
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp() {
    return (
        <Container>
            <Background />

            <Form>
                <h1>Rocketnotes</h1>
                <p>Save and manage your useful links.</p>

                <h2>Create your account</h2>

                <Input 
                    placeholder='Nome'
                    type='text'
                    icon={FiUser}
                />

                <Input 
                    placeholder='Email'
                    type='email'
                    icon={FiMail}
                />

                <Input 
                    placeholder='Password'
                    type='password'
                    icon={FiLock}
                />

                <Button title="Sign up" />

                <Link to='/'>
                    Log In
                </Link>
            </Form>

            
        </Container>
    )
}