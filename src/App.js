import React from "react"

import "./styles/global.css"
import Box from "./components/Box"

 const tempMin = -20
 const tempMax = 40
 const heartMin = 80
 const heartMax = 180
 const stepsMin = 0
 const stepsMax = 50000
const baseWater = 1.5
class App extends React.Component {
  constructor() {
    super()

    // state initial
    this.state = {
      water : 1.5,
      heart : 120,
      temperature : -10,
      steps : 3000

    }
  }
  onHeartChange= (event) =>{
    this.setState({heart: Number(event.target.value)})
    this.calculateWater()
  }
  onTempChange = (event) =>{
    this.setState({temperature: Number(event.target.value)})
    this.calculateWater()
  }
  onStepsChange =(event) =>{
    this.setState({steps: Number(event.target.value)})
    this.calculateWater()
  }

  calculateWater=() =>{
    const{heart,temperature,steps} = this.state
    const tempTreshold = 20
    const heartTreshold = 120
    const stepsTreshold = 10000
    let sum = 0
    if (temperature > tempTreshold){
      const temperatureDifference = temperature - tempTreshold
      sum += temperatureDifference * 0.02
    }
    if (heart> heartTreshold){
      const heartDifference = heart - heartTreshold 
      sum += heartDifference * 0.0008
    }
    if (steps > stepsTreshold){
      const stepsDifference = steps - stepsTreshold 
      sum += stepsDifference * 0.00002
    }
    const newWater = Number((baseWater+ sum).toFixed(2))
    this.setState({water: newWater})

  }
  render() {
console.log(this.state.heart)
console.log(this.state.water)
    return (
      <div className="container-fluid">
        <div className="row">
          {/* Water */}
          <Box icon="local_drink" color="#3A85FF" value={this.state.water} unit="L" />

          {/* Steps */}
          <Box icon="directions_walk" color="black" value={this.state.steps} unit="steps" min={stepsMin} max={stepsMax} onChange = {this.onStepsChange} />
          
          {/* Heart */}
          <Box icon="favorite" color="red" value={this.state.heart} unit="bpm" min={heartMin} max={heartMax} onChange={this.onHeartChange} />
          
          {/* Temperature */}
          <Box icon="wb_sunny" color="yellow" value={this.state.temperature} unit="°C" min={tempMin} max={tempMax} onChange={this.onTempChange}/>
        </div>
      </div>
    )
  }
}

export default App