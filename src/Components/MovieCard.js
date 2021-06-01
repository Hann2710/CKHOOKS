import React from 'react'
import { Card } from 'react-bootstrap'
import StarRatings from 'react-star-ratings'

function MovieCard({ movie }) {
  const { imgLnk, title, description, rate } = movie
  return (
    <div>
      <Card
        style={{
          height: '55rem',
          position: 'relative',
          width: '18rem',
          margin: '20px',
        }}
      >
        <Card.Img style={{ height: '450px' }} variant="top" src={imgLnk} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Body>
          <div
            style={{ position: 'absolute', bottom: '2rem', margin: '5px 15px' }}
          >
            <StarRatings
              starDimension="30px"
              rating={rate}
              starRatedColor="#F9AB21"
              numberOfStars={5}
              name="rate"
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default MovieCard
