import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="list-container">
      <p className="time">{timeAccessed}</p>
      <div>
        <img src={logoUrl} className="logo" alt="domain logo" />
        <h1 className="title">{title}</h1>
        <p className="domain">{domainUrl}</p>
      </div>
      <button className="button" onClick={onDelete}>
        <img
          className="delete-icon"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        />
      </button>
    </li>
  )
}

export default HistoryItem
