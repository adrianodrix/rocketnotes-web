import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Background, Container, Form } from "./style"
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { api } from '../../services/api'

export function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    
    async function handleSignUp() {
        if(!name || !email || !password) {
            return alert('fill in all fields')
        }

        try {
            await api.post('/users', { name, email, password })  
            alert('user registered with success')
            navigate('/')
        } catch (err) {
            console.error(err)
            if(err.response) {
                alert(err.response.data.message)
            } else {
                alert('Unable to register')
            }
        }
    }

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
                    onChange={e => setName(e.target.value)}
                />

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

                <Button title="Sign up" onClick={handleSignUp} />

                <Link to='/'>
                    Log In
                </Link>
            </Form>

            
        </Container>
    )
}