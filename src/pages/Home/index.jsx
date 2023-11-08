import { FiPlus, FiSearch } from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header></Header>

      <Menu>
        <li><ButtonText title="All" /></li>
        <li><ButtonText title="Express" active /></li>
        <li><ButtonText title="Node"/></li>
      </Menu>

      <Search>
        <Input placeholder="Search by title" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="My notes">
          <Note data={{
            title: 'lorem lorem',
            tags: [
              {
                id: 1,
                name: 'Express'
              },
              {
                id: 2,
                name: 'Node'
              }
            ]
          }} />
        </Section>
      </Content>

      <NewNote>
        <FiPlus />
        New Note
      </NewNote>
    </Container>
  )
}