import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import star from '../images/starwars.PNG'
import kenes from '../images/kenes.PNG'


const Projects = (props) => {
    
    return (
        <div className="cards">
         <div>
           <Card style={{ width: '18rem' }}>
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
                    <Card.Title>American Ailines API</Card.Title>
                    <Card.Text>
                        API for integration with AA Vacations
                    </Card.Text>
                    <a href="https://conklaven.github.io/StarWars/" target="_blank">
                    <Button variant="primary">Take a Look</Button>
                    </a>
                </Card.Body>
            </Card>
            </div>
        </div>
      );
    };



export default Projects