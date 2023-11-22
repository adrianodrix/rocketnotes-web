import { FiPlus, FiSearch } from 'react-icons/fi'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note'
import { useState } from 'react'
import { useEffect } from 'react'
import { api } from '../../services/api'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const [notes, setNotes] = useState([])
  const [tags, setTags] = useState([])
  const [tagsSelected, setTagsSelected] = useState([])
  const [search, setSearch] = useState('')

  const navigate = useNavigate()

  function handleTagSelected(name) {
    if(name == 'all') {
      return setTagsSelected([])  
    }

    const alreadySelected = tagsSelected.includes(name)

    if(alreadySelected) {
      const filteredTags = tagsSelected.filter(tag => tag !== name)
      return setTagsSelected(filteredTags)
    } else {
      return setTagsSelected(prevState => [...prevState, name])
    }
  }

  function handleDetails(id) {
    navigate(`/details/${id}`)  
  }

  useEffect(() => {
    async function fetchTags() {
      const { data } = await api.get('/tags')
      setTags( data )
    }
    
    fetchTags()  
  },[])

  useEffect(() => {
    async function fetchNotes() {
      const { data } = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
      setNotes(data)
    }

    fetchNotes()
  }, [tagsSelected, search])

  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header></Header>

      <Menu>
        <li>
          <ButtonText 
            title="All" 
            active={tagsSelected.length === 0}
            onClick={() => handleTagSelected('all')}
          />
        </li>
        {
          tags && tags.map(tag => (
            <li key={String(tag.id)} >
              <ButtonText 
                title={tag.name} 
                active={tagsSelected.includes(tag.name)}
                onClick={() => handleTagSelected(tag.name)} 
              />
            </li>
          ))
        }
      </Menu>

      <Search>
        <Input 
          placeholder="Search by title" 
          icon={FiSearch} 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="My notes">
          {
            notes && notes.map(note => (
              <Note 
                data={note} 
                key={String(note.id)} 
                onClick={() => handleDetails(note.id)}
              />
            ))
          }
        </Section>
      </Content>

      <NewNote to='/new'>
        <FiPlus />
        New Note
      </NewNote>
    </Container>
  )
}