class TrailsList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      search: ''
    }
    this.updateSearch = this.updateSearch.bind(this)
  }

  updateSearch(event){
    this.setState({
      search: event.target.value
    })
  }

  render() {
    console.log(this.props.trails);
    let filteredTrails =
    this.props.trails.filter(
      (trail)=> {
        console.log(this.state.search);
        console.log(trail.location);
        return trail.location === this.state.search || trail.name === this.state.search
      }
    )
    console.log(filteredTrails);

    return (
      <div className='trailsList'>
        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch}
          className="search_filter"
          placeholder="Search..."
        />
        <div className='zones'>
            <button
              value="Central Cascades"
              onClick={this.updateSearch}
              className="search_filter">
              Central Cascades
            </button>
            <button
              value="North Cascades"
              onClick={this.updateSearch}
              className="search_filter">
              North Cascades
            </button>
            <button
              value="Olympic Peninsula"
              onClick={this.updateSearch}
              className="search_filter">
              Olympic Peninsula
            </button>
        </div>


          <table>
            <tbody>
              {filteredTrails.map( (trail, index) => {
                console.log(trail);
                return (
                <div className='listitem'>
                  <tr>
                    <div className='bizinfo'>
                        <td className='imgsize'>
                          <img className='bizimg' src={trail.image} alt={trail.name}
                          onClick={()=> {this.props.getTrail(trail); this.props.toggleState('trailsListIsVisible', 'trailIsVisible')}} />
                        </td>

                      <div className='region'>
                        <td>
                          <h3 className='name' onClick={()=> {this.props.getTrail(trail); this.props.toggleState('trailsListIsVisible', 'trailIsVisible')}}>{trail.name}</h3>
                        </td>

                        <td>
                          <h3>
                            {trail.location}
                          </h3>
                        </td>
                      </div>
                    </div>

                    <div className='buttons'>
                      <td>
                      <button className='edit' onClick={() =>{this.props.getTrail(trail); this.props.toggleState('trailIsVisible', 'trailsListIsVisible', 'editTrailIsVisible')}}>Edit</button>
                      </td>
                      <td>
                        <button className='delete' onClick={() => this.props.deleteTrail(trail, index)}> Delete </button>
                      </td>
                    </div>
                  </tr>
                </div>
                )
              })}
          </tbody>
        </table>
      </div>
    )
  }
}
