import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import star from '../images/starwars.PNG'

const Projects = (props) => {
    
    return (
        <>
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
        </>
      );
    };



export default Projects