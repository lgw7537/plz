import { Nav, Navbar, Container, Image } from 'react-bootstrap'
import Link from 'next/link'

export default function Navigation() {
  return (
    <header>
      <Container>
        <Navbar variant="light" expand="md">
          <Navbar.Brand className="pt-3">
            <Link href="/">
              <a>
                <Image
                  src="/logo-ipsum.png"
                  alt="Grouparoo Logo"
                  width={150}
                  height={110}
                />
              </a>
            </Link>
            <span className="d-none"></span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mt-2">
              <Nav.Link>
                <Link href="/">
                  <a className="nav-link" role="">
                    개인프로젝트 바로가기
                  </a>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/events">
                  <a className="nav-link" role="button">
                    이건우
                  </a>
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link href="/menu">
                  <a className="nav-link" role="button">
                    어영민
                  </a>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/pricing">
                  <a className="nav-link" role="button">
                    박성진
                  </a>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/blog">
                  <a className="nav-link" role="button">
                    이종민
                  </a>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <div className="right">
                  <Link href="/community">
                    <a className="nav-link" role="button"></a>
                  </Link>
                  <Link href="/login">
                    <a className="nav-link" role="button"></a>
                  </Link>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  )
}
