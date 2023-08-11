import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  accelerate = () => {
    this.setState(prevState =>
      prevState.count < 200 ? {count: prevState.count + 10} : {count: 200},
    )
  }

  break = () => {
    this.setState(prevState =>
      prevState.count > 0 ? {count: prevState.count - 10} : {count: 0},
    )
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h2 className="speed">
          Speed is <span>{count}mph</span>
        </h2>
        <p className="warning">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            type="button"
            className="btn-accelerate"
            onClick={this.accelerate}
          >
            Accelerate
          </button>
          <button type="button" className="btn-break" onClick={this.break}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
