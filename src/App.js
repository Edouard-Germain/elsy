import React from "react"

import "./styles/global.css"
import Box from "./components/Box"

 const tempMin = -20
 const tempMax = 40
 const heartMin = 80
 const heartMax = 180
 const stepsMin = 0
 const stepsMax = 50000

class App extends React.Component {
  constructor() {
    super()

    // state initial
    this.state = {
      water : 0,
      heart : 120,
      temperature : -10,
      steps : 3000

    }
  }
  onHeartChange= (event) =>{
    this.setState({heart: event.target.value})
  }
  onTempChange = (event) =>{
    this.setState({temperature: event.target.value})
  }
  onStepsChange =(event) =>{
    this.setState({steps: event.target.value})
  }
  render() {
console.log(this.state.heart)
    return (
      <div className="container-fluid">
        <div className="row">
          {/* Water */}
          <Box icon="local_drink" color="#3A85FF" value="1.5" unit="L" />

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