import { Button, Card } from "react-bootstrap"
import PropTypes from 'prop-types'

function CardItem({ data, showTitle }) {
    console.log(data)
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                    {data.date}
                </Card.Text>
                <Button variant="primary" onClick={() => showTitle(data.title)}>Go somewhere</Button>

            </Card.Body>
        </Card>

    )
}

export default CardItem

CardItem.propTypes = {
    data: PropTypes.object.isRequired
}

CardItem.defaultProps = {
    data: {
        title: 'rrrr',
        date: 'ccc'
    }
}