// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
    state={speed:0}
    accelerate = ()=>{
        if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
        
    }
     applyBreak = ()=>{
         if(speed>200)
        this.setState((prevState)=>({speed:prevState.speed-10}))
    }
  render() {
      const {speed}=this.state
    return (
      <div className="bg">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="img"
        >
        <h1 className="heading">Speed is {speed}mph</h1>
        <p>Min Limit is 0mph,Max Limit is 200mph</p>
        <div className="button-container">
            <button type="button" className="button-custom" onClick={this.accelerate}>Accelerate</button>
            <button type="button" className="button-custom" onClick={this.applyBreak}>Apply Break</button>
        </div>
    </div>
    )
  }
}
export default Speedometer
