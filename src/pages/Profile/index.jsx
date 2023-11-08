import { FiArrowLeft, FiUser, FiMail, FiLock, FiUnlock, FiCamera } from 'react-icons/fi'
import { Container, Form, Avatar } from "./styles"
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export function Profile() {
    return (
        <Container>
            <header>
                <Link to="/">
                     <FiArrowLeft />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/adrianodrix.png" alt="avatar" />
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input id='avatar' type="file" />
                    </label>
                </Avatar>

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
                    placeholder='Current password'
                    type='password'
                    icon={FiUnlock}
                />

                <Input 
                    placeholder='New password'
                    type='password'
                    icon={FiLock}
                />

                <Button title="Save" />
            </Form>
        </Container>
    )
}