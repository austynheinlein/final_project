class Trail extends React.Component {
  render() {
    return (
      <div className='show'>


        <div className='individual'>
              <img src={this.props.trail.image} alt={this.props.trail.name}/>

              <p> Name: {this.props.trail.name} </p>

              <p> Region: {this.props.trail.location}</p>

              <p> Mileage: {this.props.trail.mileage}</p>

              <a href=".">Back</a>

        </div>

        {this.props.editTrailIsVisible ?
          <TrailForm trail={this.props.trail} handleSubmit={this.props.handleSubmit} editTrailIsVisible={this.props.editTrailIsVisible} toggleState={this.props.toggleState}/>
          : ''
        }
      </div>
    )
  }
}
