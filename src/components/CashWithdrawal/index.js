import {Component} from 'react'

import GetItem from './index2'

import './index.css'

class CashWithdrawal extends Component {
  state = {count: 2000}

  onDecrement = props => {
    if (props === 1) {
      this.setState(prevState => ({count: prevState.count - 50}))
    }
    if (props === 2) {
      this.setState(prevState => ({count: prevState.count - 100}))
    }
    if (props === 3) {
      this.setState(prevState => ({count: prevState.count - 200}))
    }
    if (props === 4) {
      this.setState(prevState => ({count: prevState.count - 500}))
    }
  }

  render() {
    const {denominationsList} = this.props
    const {count} = this.state
    return (
      <div className="cont">
        <div className="inner-cont">
          <div className="first">
            <h1 className="s">S</h1>
            <p className="main-head">Sarah Williams</p>
          </div>
          <div className="second">
            <p className="para2">Your Balance</p>
            <p className="para4">{count}</p>
          </div>
          <p className="para3">In Rupees</p>
          <p className="para4">Withdraw</p>
          <p className="para2">CHOOSE SUM (IN RUPEES)</p>
          <ul className="card">
            {denominationsList.map(each => (
              <GetItem
                item={each}
                key={each.id}
                onDecrement={this.onDecrement}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
