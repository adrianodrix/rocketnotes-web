import { useState } from 'react'
import { FiArrowLeft, FiUser, FiMail, FiLock, FiUnlock, FiCamera } from 'react-icons/fi'
import { Container, Form, Avatar } from "./styles"
import { api } from '../../services/api'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Profile() {
    const { user, updateProfile } = useAuth()
    
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [passwordOld, setPasswordOld] = useState('')
    const [passwordNew, setPasswordNew] = useState('')

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState(null)

    async function handleUpdate() {
        const updated = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld
        }

        const userUpdated = Object.assign(user, updated)
        await updateProfile({ user: userUpdated, avatarFile })
    }

    function handleChangeAvatar(e) {
        const file = e.target.files[0]
        console.log(file)
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    return (
        <Container>
            <header>
                <Link to={-1}>
                     <FiArrowLeft />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src={avatar} alt="avatar" />
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input id='avatar' type="file" onChange={handleChangeAvatar}/>
                    </label>
                </Avatar>

                <Input 
                    placeholder='Nome'
                    type='text'
                    icon={FiUser}
                    defaultValue={name}
                    onChange={e => setName(e.target.value)}
                />

                <Input 
                    placeholder='Email'
                    type='email'
                    icon={FiMail}
                    defaultValue={email}
                    onChange={e => setEmail(e.target.value)}
                />


                <Input 
                    placeholder='Current password'
                    type='password'
                    icon={FiUnlock}
                    onChange={e => setPasswordOld(e.target.value)}
                />

                <Input 
                    placeholder='New password'
                    type='password'
                    icon={FiLock}
                    onChange={e => setPasswordNew(e.target.value)}
                />

                <Button title="Save" onClick={handleUpdate} />
            </Form>
        </Container>
    )
}