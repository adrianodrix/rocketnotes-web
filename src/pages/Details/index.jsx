import { Container, Links, Content } from "./styles"
import { Button } from '../../components/Button'
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { api } from "../../services/api"

export function Details() {
  const navigate = useNavigate()
  const params = useParams()
  const [data, setData] = useState(null)

  function handleGoBack() {
    navigate(-1)
  }

  async function handleRemove() {
    const confirm = window.confirm('Do you really want to remove the note?')
    if(confirm) {
      await api.delete(`/notes/${params.id}`)
      handleGoBack()
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }

    fetchNote()
  }, [])

  return (
    // Fragment == <>
    // <Fragment>  
    <Container>
      <Header />
      { data &&
        <main>
          <Content>
            <ButtonText title="Delete note" onClick={handleRemove} />

            <h1>{data.title}</h1>
            <p>{data.description}</p>

            { data.links?.length > 0 &&
            <Section title="Useful links">
              <Links>
              {
                data.links.map(link => (
                  <li key={String(link.id)}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">{link.url}</a>
                  </li>
                ))
              }
              </Links>
            </Section>
            }

            { data.tags?.length > 0 &&
            <Section title="Markers">
              {
                data.tags.map(tag => (
                  <Tag title={tag.name} key={String(tag.id)} />
                ))
              }
            </Section>
            }

            <Button title="Go Back" onClick={handleGoBack} />
          </Content>
        </main>
      }
        
    </Container>
    // </Fragment>      
  )
}

export default Details
