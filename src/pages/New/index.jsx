import { Link } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { TextArea } from '../../components/TextArea'
import { Button } from '../../components/Button'
import { Container, Form } from './styles'

export function New() {
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
              <NoteItem value='http://github.com/adrianodrix' />
              <NoteItem isNew placeholder='New item' />
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