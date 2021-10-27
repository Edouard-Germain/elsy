import React from "react"

class Box extends React.Component {
  render() {
    // console.log(this.props)
    const checkWater = "L"
    return (
      <div className="box col-sm-3 col-6">
        <span className="material-icons" style={{ fontSize: "100px", color: this.props.color }}>
          {this.props.icon}
        </span>
        <p>{this.props.value}{this.props.unit}</p>
        {this.props.unit != checkWater ?(<input type ="range" min= {this.props.min} max={this.props.max} onChange={this.props.onChange} ></input>):(<></>)}
      </div>
    )
  }
}

export default Box
