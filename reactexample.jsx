class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'firstpage'
    }
    this.handleClickFirstPage = this.handleClickFirstPage.bind(this);
  }

  changePage(e, page) {
    e.preventDefault()
    this.setState({
      page: page
    })
  }

  render() {
    let page;
    if (this.state = 'firstpage') {
      page = (
        <div>
          <h1>first page</h1>
          <button onClick={
            (e) => {this.changePage(e, 'secondpage')}
          }>
            next
          </button>
        </div>
      )
    } else if (this.state = 'secondpage') {
      page = (
        <div>
          <h2>second page</h2>
          <form onSumbit={this.handleclickSecondPage}>
            <input>
            </input>
            <button onClick={
              (e) => {this,this.changePage(e, 'thirdpage')}
            }></button>
          </form>
        </div>
      )
    }
    return (
      <div>{page}</div>
    )
  }
}