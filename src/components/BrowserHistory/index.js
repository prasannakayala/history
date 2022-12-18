import {Component} from 'react'

import './index.css'

import HistoryItem from '../HistoryItem'

class BrowserHistory extends Component {
  state = {
    searchInput: '',
    historyList: initialHistoryList,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteItem = id => {
    const {historyList} = this.state
    const filteredUserList = historyList.filter(eachItem => eachItem.id !== id)

    this.setState({
      historyList: filteredUserList,
    })
  }

  render() {
    const {searchInput, historyList} = this.state
    const searchResults = historyList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <navbar className="bg-primary">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="history-logo"
          />
          <div>
            <div className="search-container">
              <img
                className="search-logo"
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              />
              <input
                type="text"
                placeholder="search History"
                className="input-holder"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
          </div>
        </navbar>
        {searchResults.length === 0 ? (
          <p className="no-history">There is no history to show</p>
        ) : (
          <ul className="list-items">
            {searchResults.map(eachItem => (
              <HistoryItem
                historyDetails={eachItem}
                key={eachItem.id}
                deleteItem={this.deleteItem}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BrowserHistory
