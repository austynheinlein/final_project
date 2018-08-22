class Trails extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      trailsListIsVisible: true,
      addTrailIsVisible: false,
      trailIsVisible: false,
      editTrailIsVisible: false,
      trails: [],
      trail: {}
    }
    this.toggleState = this.toggleState.bind(this)
    this.getTrail = this.getTrail.bind(this)
    this.handleCreate = this.handleCreate.bind(this)
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
    this.deleteTrail = this.deleteTrail.bind(this)
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
  }

  handleUpdateSubmit(trail){
    console.log(trail);
    console.log(JSON.stringify(trail));
    const jsonTrail = JSON.stringify(trail)
    fetch('/trails/' + trail.id, {
      body: jsonTrail,
      method: 'PUT',
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
    .then(updatedTrail => {
      console.log('updatedTrail', updatedTrail);
      return updatedTrail.json()
    })
    .then(jsonedTrail => {
      console.log('abcd');
      this.getTrails()
      this.toggleState('trailsListIsVisible', 'trailIsVisible')
    })
    .catch(error => console.log(error))
  }

  deleteTrail(trail, index){
    fetch('trails/' + trail.id,
    {
      method: 'DELETE'
    })
    .then(data => {
      this.setState({
        trails: [
          ...this.state.trails.slice(0, index),
          ...this.state.trails.slice(index + 1)
        ]
      })
    })
  }

  handleCreate(trail){
    this.setState({
      trails: [trail, ...this.state.trails]
    })
  }

  handleCreateSubmit(trail){
    fetch('/trails', {
      body: JSON.stringify(trail),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdTrail => {
      return createdTrail.json()
    })
    .then(jsonedTrail => {
      this.handleCreate(jsonedTrail)
      this.toggleState('addTrailIsVisible', 'trailsListIsVisible')
    })

  }

  getTrail(trail){
    this.setState({
      trail: trail
    })
  }

  componentDidMount(){
    this.getTrails()
  }

  getTrails(){
    fetch('/trails')
    .then(response => response.json())
    .then(data => {
      this.setState({
        trails: data
      })
    }).catch(error => console.log(error))
  }

  toggleState (state1, state2, state3) {
    this.setState({
      [state1]: !this.state[state1],
      [state2]: !this.state[state2],
      [state3]: !this.state[state3]
    })
  }

  render() {
    return(

      <div className='trails'>
        <h3 className='local'> Dog Friendly Trails </h3>
        <button className='addbtn' onClick={()=>this.toggleState('addTrailIsVisible', 'trailsListIsVisible')}>Add a Trail</button>

        {this.state.trailsListIsVisible ?
          <TrailsList
            toggleState={this.toggleState}
            trails={this.state.trails}
            getTrail={this.getTrail}
            deleteTrail={this.deleteTrail}
          />
          : ''
        }
        {this.state.addTrailIsVisible ?
          <TrailForm
            toggleState={this.toggleState}
            handleCreate={this.handleCreate}
            handleSubmit={this.handleCreateSubmit}
            editTrailIsVisible={this.state.editTrailIsVisible}
          />
          : ''
        }

        {this.state.trailIsVisible ?
          <Trail
            toggleState={this.toggleState}
            trail={this.state.trail}
            handleSubmit={this.handleUpdateSubmit}
            editTrailIsVisible={this.state.editTrailIsVisible}
          />
          : ''
        }
      </div>

    )
  }

}
