class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'firstpage'
    }
    this.handleClickFirstPage = this.handleClickFirstPage.bind(this);
  }

  handleClickFirstPage() {
    this.setState({
      page: 'secondpage'
    })
  }

  handleclickSecondPage() {
    $ajax({
      type: POST
    })
    this.setStage({
      page: 'thirdpage'
    })
  }
  render() {
    let page;
    if (this.state = 'firstpage') {
      page = (
        <div>
          <h1>first page</h1>
          <button onClick={this.handleClickFirstPage}>next</button>
        </div>
      )
    } else if (this.state = 'secondpage') {
      page = (
        <div>
          <h2>second page</h2>
          <form onSumbit={this.handleclickSecondPage}>
            <input>
            </input>
            <button></button>
          </form>
        </div>
      )
    }
    return (
      <div>{page}</div>
    )
  }
}




