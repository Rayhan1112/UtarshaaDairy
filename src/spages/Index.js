/* eslint-disable no-lone-blocks */
import {React, useRef} from 'react';
import './index.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import './cards.css'
import Item from '../components/items';
import Footer from '../components/footer';
import Contact from '../components/contact';
import ImageCard from '../components/ImageCard';


export default function Index() {
  const contactRef = useRef(null);
  const productRef = useRef(null);

  // Scroll to the Contact section
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProduct = () => {
    productRef.current.scrollIntoView({ behavior: 'smooth' });
  };

 
  return (
    <div>
      
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" sticky='top'>
        <Container>
          <Navbar.Brand href="#home">
            <h1 className="title">
              <span>Utkarshaa Milk Products</span>
            </h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link onClick={scrollToProduct}>Products</Nav.Link>
              {/* Use onClick instead of href for smooth scrolling */}
              <Nav.Link onClick={scrollToContact}>Contact</Nav.Link>
            </Nav>
            <Nav className='imagesNav'>
              <img src={require('../Images/logo.png')} alt='Logo' className='Logo' style={{ marginRight: '20px' }} />
              <img src={require('../Images/sublogo.png')} alt='Logo' className='SubLogo' />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
      <Carousel fade id='Products' >
      <Carousel.Item>
          <img style={{ height: '80vh', objectFit: 'fill' }}
            className="d-block w-100"
            src={require('../Images/FirstPage.jpeg')}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: '80vh', objectFit: 'fill' }}
            className="d-block w-100"
            src={require('../Images/asset1.png')}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>Gulkand Basundi</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: '80vh', objectFit: 'fill' }}
            className="d-block w-100"
            src={require('../Images/asset2.png')}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Anjir Basundi</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: '84vh', objectFit: 'fill' }}
            className="d-block w-100"
            src={require('../Images/asset3.png')}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Rabbdi Basundi</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: '80vh', objectFit: 'fill' }}
            className="d-block w-100"
            src={require('../Images/asset4.png')}
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h5>Shitapal Basundi</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h1 ref={productRef} id='Products' style={{ textAlign: 'center', marginTop: '30px' }}>Our Special Products</h1>
      <div className='Cards' >
        <Card  style={{ width: '18rem' }}>
          <Card.Img className='singleImg' variant="top" src={require('../Images/mobile1.png')} />
          <Card.Body>
            <Card.Title className='title'>Anjir Basundi </Card.Title>
            <Card.Text>
              <Item />
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', }}>
          <Card.Img variant="top" src={require('../Images/mobile2.png')} />
          <Card.Body>
            <Card.Title className='title'>Gulkand Basundi </Card.Title>
            <Item />
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', }}>
          <Card.Img variant="top" src={require('../Images/mobile3.png')} />
          <Card.Body>
            <Card.Title className='title'>Rabbdi   Basundi </Card.Title>
            <Item />
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', }}>
          <Card.Img variant="top" src={require('../Images/mobile4.png')} />
          <Card.Body>
            <Card.Title className='title'>Shitapal Basundi </Card.Title>
            <Item />
          </Card.Body>
        </Card>

      </div>
      <h1 style={{ textAlign: 'center', marginTop: '30px', marginBottom:'20px' }}>Our Special Products</h1>
      <div className='ImageContainer'>
      <ImageCard imgPath={require('../Images/p1.jpg')}/>
      <ImageCard imgPath={require('../Images/amar.jpg')}/>
      <ImageCard imgPath={require('../Images/p3.jpg')}/>
      <ImageCard imgPath={require('../Images/p4.jpg')}/>
      <ImageCard imgPath={require('../Images/p5.jpg')}/>
      </div>

      <div ref={contactRef} id="Contact">
      < Contact/>
      </div>

      <div ref={contactRef} id="Contact">
      <Footer />
      </div>

      
    </div>
  );
}

