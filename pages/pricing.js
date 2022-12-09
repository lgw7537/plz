import { Button, Container, Jumbotron } from 'react-bootstrap'

export default function Events() {
  return (
    <>
      <Container>
        <Jumbotron className="mx-auto mt-5 w-auto text-center">
          <Button
            variant="primary"
            className="col-4 mx-auto"
            href="https://jin-blog-topaz.vercel.app/"
          >
            박성진 개인프로젝트
          </Button>
        </Jumbotron>
      </Container>
    </>
  )
}
