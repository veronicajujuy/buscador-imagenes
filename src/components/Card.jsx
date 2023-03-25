import "./Card.css"

const Card = ({item}) => {
  return (
    <div className="card">
        <div className="card-top">
            <img src={item.urls.small} alt="imagen" />
        </div>
        <div className="card-bottom">
            {item.alt_description}
        </div>
    </div>
  )
}

export default Card
    