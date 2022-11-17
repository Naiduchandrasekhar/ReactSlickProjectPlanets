// Write your code here
import Slider from 'react-slick'

import './index.css'
import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <div className="mainContainer">
      <h1 className="heading">PLANETS</h1>
      <div className="List">
        <Slider>
          {planetsList.map(eachPlanet => (
            <PlanetItem key={eachPlanet.id} eachPlanet={eachPlanet} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
