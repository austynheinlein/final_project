class TrailForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      image: '',
      name: '',
      location: '',
      mileage: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount(){
    if(this.props.trail){
      this.setState({
        image: this.props.trail.image,
        name: this.props.trail.name,
        location: this.props.trail.location,
        mileage: this.props.trail.mileage
      })
    }
  }

  handleChange(event){
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.handleSubmit(this.state)
  }

  render(){
    return (
      <div className='form'>
        <form className='pure-form pure-form-aligned' onSubmit={this.handleSubmit}>

            <div className='pure-control-group'>
                <label className='label' for='image'> Image </label>
                <input className='input' type='text' id='image'
                  onChange={this.handleChange}
                  value={this.state.image}
                />
            </div>

          <br/>

            <div className='pure-control-group'>
                <label className='label' for='name'> Name </label>
                <input className='input' type='text' id='name'
                  onChange={this.handleChange}
                  value={this.state.name}
                />
            </div>

          <br/>

            <div className='pure-control-group'>
                <label className='label' for='location'> Region </label>
                <input className='input' type='text' id='location'
                  onChange={this.handleChange}
                  value={this.state.location}
                />
            </div>

          <br/>

            <div className='pure-control-group'>
                <label className='label' for='mileage'> Mileage </label>
                <input className='input' type='text' id='mileage'
                  onChange={this.handleChange}
                  value={this.state.mileage}
                />
            </div>

          <br/>

            <div className='pure-controls'>
              <input type="submit" value="Submit" />
            </div>

        </form>
            <div className='cancelbtn'>
              {this.props.editTrailIsVisible ?
              <button className='cancel' onClick={()=> this.props.toggleState('trailsListIsVisible', 'trailIsVisible', 'editTrailIsVisible')}> Cancel </button>
                :
              <button className='cancel' onClick={()=> this.props.toggleState('trailsListIsVisible', 'addTrailIsVisible')}> Cancel </button>
              }
            </div>

      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("main")
)