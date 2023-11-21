import { Link } from 'react-router-dom'
import { FiMail, FiLock } from 'react-icons/fi'
import { Background, Container, Form } from "./style"
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { useAuth } from '../../hooks/auth'
import { useState } from 'react'

export function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn } = useAuth()

    function handleSignIn() {
        signIn({email, password})
    }
    
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
                    onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    placeholder='Password'
                    type='password'
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Log in" onClick={handleSignIn} />

                <Link to='/register'>
                    Create your account
                </Link>
            </Form>

            <Background />
        </Container>
    )
}