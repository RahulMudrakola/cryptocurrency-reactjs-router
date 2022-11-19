// Write your JS code here
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  render() {
    const {cryptocurrenciesData} = this.props

    return (
      <div className="bg-container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          className="image"
          alt="cryptocurrency"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        />
        <div className="currency-container">
          <nav className="nav">
            <h1 className="h2">Coin Type</h1>
            <div className="right-side">
              <h1 className="h1">USD</h1>
              <h1 className="h1">EURO</h1>
            </div>
          </nav>
          <ul className="cryptocurrencies-list">
            {cryptocurrenciesData.map(eachCryptocurrency => (
              <CryptocurrencyItem
                key={eachCryptocurrency.id}
                cryptocurrencyDetails={eachCryptocurrency}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
