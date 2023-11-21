import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { Container, Form } from './styles'
import { useState } from 'react'

export function New() {
  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState('')

  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink('')
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
            <header>
                <h1>New Note</h1>
                <Link to='/'>Go back</Link>
            </header>

            <Input placeholder='Title'/>
            <TextArea placeholder='Comments' />

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
                <NoteItem value='react' />
                <NoteItem isNew placeholder='New tag' />
              </div>
            </Section>

            <Button title='Save'/>
        </Form>
      </main>
    </Container>
  )
}