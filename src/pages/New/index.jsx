import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { Container, Form } from './styles'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'

export function New() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState('')
  
  const navigate = useNavigate()

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink('')
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag('')
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleSaveNote() {
    if(!title) {
      return alert("title is required")
    }

    if(newTag) {
      return alert("You left a tag in the field to add, but didn't add it")
    }

    if(newLink) {
      return alert("You left a link in the field to add, but didn't add it")
    }

    try {
      await api.post('/notes', {
        title,
        description,
        tags,
        links
      })

      alert('note created with success!')
      navigate(-1)
    } catch (err) {
      console.error(err)
      if(err.response) {
          alert(err.response.data.message)
      } else {
          alert('unable to create a note')
      }
    }
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
            <header>
                <h1>New Note</h1>
                <Link to={-1}>Go back</Link>
            </header>

            <Input placeholder='Title' value={title} onChange={e => setTitle(e.target.value)}/>
            <TextArea placeholder='Comments'onChange={e => setDescription(e.target.value)}>{description}</TextArea>

            <Section title='Useful links'>
              {
                links.map((link, index) => (
                  <NoteItem 
                    key={String(index)}
                    value={link}
                    onClick={(e) => handleRemoveLink(link)}
                  />
                ))
              }
              <NoteItem 
                isNew 
                placeholder='New item' 
                value={newLink}
                onChange={e => setNewLink(e.target.value)}
                onClick={handleAddLink}
              />
            </Section>

            <Section title='Markers'>
              <div className="tags">
                {
                  tags.map((tag, index) => (
                    <NoteItem 
                      key={String(index)}
                      value={tag}
                      onClick={(e) => handleRemoveTag(tag)}
                    />
                  ))
                }
                <NoteItem 
                  isNew 
                  placeholder='New tag' 
                  value={newTag}
                  onChange={e => setNewTag(e.target.value)}
                  onClick={handleAddTag}
                />
              </div>
            </Section>

            <Button title='Save' onClick={handleSaveNote} />
        </Form>
      </main>
    </Container>
  )
}