import { Container, Links, Content } from "./styles"
import { Button } from '../../components/Button'
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"

export function Details() {
  return (
    // Fragment == <>
    // <Fragment>  
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Delete note" />

          <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quasi esse exercitationem dignissimos ad dolores inventore rem in architecto, corporis sit placeat facilis odio, vero iusto accusantium similique deserunt eaque?
          </p>

          <Section title="Useful links">
            <Links>
              <li>
                <a href="http://www.google.com" target="_blank" rel="noopener noreferrer">http://www.google.com</a>
              </li>
              <li>
                <a href="http://www.rocketseat.com" target="_blank" rel="noopener noreferrer">http://www.rocketseat.com</a>
              </li>
            </Links>
          </Section>

          <Section title="Markers">
            <Tag title="express" />
            <Tag title="node" />
          </Section>

          <Button title="Go Back" />
        </Content>
      </main>
    </Container>
    // </Fragment>      
  )
}

export default Details
