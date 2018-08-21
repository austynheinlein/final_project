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
    let filteredTrails =
    this.props.trails.filter(
      (trail)=> {
        return
        trail.location.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 || trail.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
      }
    )
    return (
      <div className='trailsList'>
        <input
          type="text"
          value={this.state.search}
          onChange={this.updateSearch}
          className="search_filter"
          placeholder="Search..."
        />
          <table>
            <tbody>
              {filteredTrails.map( (trail, index) => {
                return (
                <div className='listitem'>
                  <tr>
                    <div className='bizinfo'>
                        <td className='imgsize'>
                          <img className='bizimg' src={trail.image} alt={trail.company_name}
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
