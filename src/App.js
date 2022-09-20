import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import NavigationBar from './component/NavigationBar';
import "./style/landingPage.css";

function App() {
  return (
    <div>
      <div class="myBG">
        <NavigationBar />

        <div className='intro'>
          <Container className='text-white d-flex justify-content-center align-items-center'>
            <Row>
              <Col>
              <div>NONTON GRATIS GAK PAKE KARCIS</div>
              </Col>
            </Row>
          </Container>
        </div>

      </div>
    </div>
  );
}

export default App;
