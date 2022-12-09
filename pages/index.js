import Head from 'next/head'
import {
  Jumbotron,
  Button,
  Container,
  Image,
  Row,
  Col,
  Card,
} from 'react-bootstrap'
import '../components/icons'
import Comments from '../components/Comments'

export default function Home() {
  return (
    <>
      <Head></Head>

      <main>
        <Image src="/KakaoTalk_20221209_184640035.jpg" width="100%" fluid />
        <Jumbotron className="col-8 mt-5 mx-auto">
          <h1>어서오세요!</h1>
          <p>
            웹보안프로그래밍 3조입니다.<br></br>저희는 여행블로그 사이트를
            만들어보았으며<br></br> 게시물을 눌러보시면 포스팅을 보실수있습니다.
            <br></br>
            아래 버튼을 클릭하시면 팀프로젝트 GITHUB를 보실수 있습니다.{' '}
          </p>
          <p>
            <Button
              variant="primary"
              className="col-4 mx-auto"
              href="http://naver.com"
            >
              3조 깃허브 보러가기
            </Button>
          </p>
        </Jumbotron>
        <Container>
          <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3">
            <Col className="mb-4">
              <Card className="py-5 shadow-lg h-100">
                <Card.Body>
                  <Card.Title>전역후 여수여행</Card.Title>
                  <Image
                    src="/KakaoTalk_20221209_144326801_16.jpg"
                    width="250"
                    fluid
                  />
                  <br></br>
                  글쓴이: 이건우<br></br>
                  올린날짜:2022.12.09
                  <br />
                  <br />
                  <h3>관광장소, 먹거리등을 소개하는 포스팅</h3>
                </Card.Body>
                <Button
                  variant="primary"
                  className="col-4 mx-auto"
                  href="./sub/post1"
                >
                  {' '}
                  보러가기
                </Button>
              </Card>
            </Col>
            <Col className="mb-4">
              <Card className="pricingCard py-5 shadow-lg h-100">
                <Card.Body>
                  <Card.Title>강원도 강릉시</Card.Title>
                  은은한 커피향이 남다른 강원도 강릉시.
                  <br></br>
                  글쓴이 : 어영민
                  <br></br>
                  올린날짜:2022.12.09
                  <br />
                  <br />
                  <p>
                    카페거리로 유명한 안목해변은 발이 닿는 어디든 향긋한 커피 한
                    잔에 지평선 끝까지 펼쳐지는 바다 풍경은 덤으로 얻을 수 있다.
                    일출 명소로 유명한 정동진과 야경이 아름다운 경포대는 대표
                    여행 코스! 구름도 머물다 간다는 해발 1,100m에 위치한 강릉
                    안반데기 마을은 전망대에 올라 드넓게 펼쳐진 배추밭이 붉게
                    물드는 일출 전경이 일품이다.
                  </p>
                </Card.Body>
                <Button
                  variant="primary"
                  className="col-4 mx-auto"
                  href="./sub/post2"
                >
                  보러가기
                </Button>
              </Card>
            </Col>
            <Col className="mb-4 offset-md-3 offset-xl-0">
              <Card className="pricingCard py-5 shadow-lg h-100 ">
                <Card.Body>
                  <Card.Title>제주도</Card.Title>
                  제주도 추천하는 곳 :<br></br> 한라산,성산일출봉,올레<br></br>
                  글쓴이:박성진<br></br>
                  올린날짜:2022.12.09
                  {''}
                  <br />
                  <br />
                  <p>
                    서울에서 비행기로 1시간 거리에 있는 제주도는 한국에서 가장
                    큰 섬이다. 화산 활동으로 생긴 한라산, 오름, 주상절리 등
                    볼거리가 풍부해 한국의 대표적 여행지로 꼽힌다. 코로나가
                    지구촌을 덮치기 전인 2019년에는 내국인과 외국인을 포함해
                    연간 1528만6136명이 제주도를 방문했다.2002년 유네스코
                    생물권보전지역으로 지정된 제주도에는 한라산 천연보호구역,
                    성산 일출봉, 거문오름 용암동굴계 등 유네스코 세계자연유산
                    3곳이 있다.
                  </p>
                </Card.Body>
                <Button
                  variant="primary"
                  className="col-4 mx-auto"
                  href="./sub/post3"
                >
                  {' '}
                  보러가기
                </Button>
              </Card>
            </Col>
            <Col className="mb-4">
              <Card className="pricingCard py-5 shadow-lg h-100">
                <Card.Body>
                  <Card.Title>제주도</Card.Title>
                  제주도 추천하는 곳 : 한라산,성산일출봉,올레 <br></br>
                  글쓴이:박성진
                  <br></br>
                  올린날짜:2022.12.09
                  {''}
                  <br />
                  <br />
                  <p>
                    서울에서 비행기로 1시간 거리에 있는 제주도는 한국에서 가장
                    큰 섬이다. 화산 활동으로 생긴 한라산, 오름, 주상절리 등
                    볼거리가 풍부해 한국의 대표적 여행지로 꼽힌다. 코로나가
                    지구촌을 덮치기 전인 2019년에는 내국인과 외국인을 포함해
                    연간 1528만6136명이 제주도를 방문했다.2002년 유네스코
                    생물권보전지역으로 지정된 제주도에는 한라산 천연보호구역,
                    성산 일출봉, 거문오름 용암동굴계 등 유네스코 세계자연유산
                    3곳이 있다.
                  </p>
                </Card.Body>
                <Button
                  variant="primary"
                  className="col-4 mx-auto"
                  href="./sub/post4"
                >
                  보러가기
                </Button>
              </Card>
            </Col>
            <Col className="mb-4">
              <Card className="pricingCard py-5 shadow-lg h-100">
                <Card.Body>
                  <Card.Title>부산</Card.Title>
                  부산 추천하는 곳 : 해운대,광안리,송정해수욕장
                  <br />
                  글쓴이:이종민
                  <br></br>
                  올린날짜:2022.12.09
                  <p>
                    대한민국 제2의 도시이자 대한민국 최초의 직할시 · 광역시이고
                    국내 최대국제무역항이 있는 제1의 항구도시, 경상권 최대도시,
                    제1의 해양교통과 제2의 항공교통 김해국제공항 타이틀 등을
                    보유한 도시이기도 하다. 지역 내 문화 컨텐츠로는 대한민국
                    최대의 영화제인 부산국제영화제를 비롯해 G-STAR,
                    부산국제모터쇼, 부산불꽃축제, 부산항 불꽃축제, 부산
                    비엔날레, 부산 원아시아 페스티벌, 자갈치 축제, 부산 해맞이
                    축제 등이 유명하다.
                  </p>
                </Card.Body>
                <Button
                  variant="primary"
                  className="col-4 mx-auto"
                  href="./sub/post5"
                >
                  보러가기
                </Button>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="parallax paralsec" />
        <Container>
          <div className="mt-3 p-3 mx-auto">
            <h2>웹보안프로그래밍 3조 후기</h2>
            <p>
              이건우: 만드는데 힘들었지만 보람찬 프로젝트였다고 생각한다.{' '}
              <br></br>
            </p>

            <p>
              어영민:실습을 하면서 점점 성장하고 있다고 느낄 수 있어서 의미있는
              수업이었다.
            </p>

            <p>
              박성진 : 이번 실습으로 개발에 대해 많이 생각하는 계기가 된 것
              같다.
            </p>
            <p>
              이종민 : 존경하는 교수님에게 가르침을 받는다는 것은 영광스러운
              일이었다.
            </p>
          </div>
        </Container>
        <Comments />
      </main>
      <footer className="footer mt-auto mx-auto py-3 bg-light">
        <div className="container text-center">
          <span className="text-muted text-center">
            Copyright &copy; 2022 Travel by Teamproject 5nd
          </span>
        </div>
      </footer>
    </>
  )
}
