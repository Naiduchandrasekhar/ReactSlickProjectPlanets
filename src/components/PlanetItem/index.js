// Write your code here
import './index.css'

const PlanetItem = props => {
  const {eachPlanet} = props
  const {name, imageUrl, description} = eachPlanet
  return (
    <div className="listItem">
      <img src={imageUrl} alt={`planet ${name}`} className="planetImage" />
      <h1 className="name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
