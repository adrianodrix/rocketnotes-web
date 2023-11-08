import { Link } from 'react-router-dom'
import { FiMail, FiLock } from 'react-icons/fi'
import { Background, Container, Form } from "./style"
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>Rocketnotes</h1>
                <p>Save and manage your useful links.</p>

                <h2>Make your access</h2>

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

                <Button title="Log in" />

                <Link to='/register'>
                    Create your account
                </Link>
            </Form>

            <Background />
        </Container>
    )
}