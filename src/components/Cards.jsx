import Card from 'react-bootstrap/Card';
import House from '../assets/house.jpg'


function Cards({ props }) {
    return (
        <Card style={{ width: '14rem' }}>
            <Card.Img src={House} />
            <Card.Body>
                <Card.Title>{props}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Cards;