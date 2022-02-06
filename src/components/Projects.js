import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import star from '../images/starwars.PNG'
import kenes from '../images/kenes.PNG'


const Projects = (props) => {
    
    return (
        <div className="cards shadow-box-example hoverable">
         <div className="shadow-box-example hoverable">
           <Card className="shadow-box-example hoverable" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={star} height="200px"/>
                <Card.Body>
                    <Card.Title>Star Wars Search</Card.Title>
                    <Card.Text>
                        Interactive Star Wars Search
                    </Card.Text>
                    <a href="https://conklaven.github.io/StarWars/" target="_blank">
                    <Button variant="primary">Take a Look</Button>
                    </a>
                </Card.Body>
            </Card>
            </div>
            <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={kenes} height="200px"/>
                <Card.Body>
                    <Card.Title>Kenes Tours Database</Card.Title>
                    <Card.Text>
                        On the go acces for tour operators
                    </Card.Text>
                    <a href="http://kenestours.herokuapp.com/Restaurants" target="_blank">
                    <Button variant="primary">Take a Look</Button>
                    </a>
                </Card.Body>
            </Card>
            </div>
            <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={star} height="200px"/>
                <Card.Body>
                    <Card.Title>Jewanced</Card.Title>
                    <Card.Text>
                        Immersive website for a new podcast
                    </Card.Text>
                    <a href="https://jewanced.com" target="_blank">
                    <Button variant="primary">Take a Look</Button>
                    </a>
                </Card.Body>
            </Card>
            </div>
        </div>
      );
    };



export default Projects