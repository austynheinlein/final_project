class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Trails />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("main")
)
