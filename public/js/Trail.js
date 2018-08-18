class Trail extends React.Component {
  render() {
    return (
      <div className='show'>
        <button className='fullList' onClick={()=>this.props.toggleState('trails', 'trailIsVisible')}>See Full Trail List</button>

        <div className='individual'>
              <img src={this.props.trail.image} alt={this.props.trail.name}/>

              <p> Name: {this.props.trail.name} </p>

              <p> Region: {this.props.trail.location}</p>

              <p> Mileage: {this.props.trail.mileage}</p>
        </div>

        {this.props.editTrailIsVisible ?
          <TrailForm trail={this.props.trail} handleSubmit={this.props.handleSubmit} editTrailIsVisible={this.props.editTrailIsVisible} toggleState={this.props.toggleState}/>
          : ''
        }
      </div>
    )
  }
}
