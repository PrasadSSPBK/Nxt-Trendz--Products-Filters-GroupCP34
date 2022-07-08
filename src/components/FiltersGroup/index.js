import {BsSearch} from 'react-icons/bs'

import './index.css'
import Category from '../Category'
import Rating from '../Rating'

let x
const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    onClickCatId,
    onChangeSearchInput,
    onClickRatId,
    clearFilters,
    onEnterSearchInput,
    searchInput,
  } = props

  const onChangeSearch = event => {
    x = event.target.value
    onChangeSearchInput(x)
  }

  const clear = () => {
    clearFilters()
  }

  const onEnter = event => {
    if (event.key === 'Enter') {
      onEnterSearchInput()
    }
  }

  return (
    <div className="filters-group-container">
      <h1>Filters Group</h1>
      <div className="filterContainer">
        <div className="searchContainer">
          <input
            value={searchInput}
            type="search"
            placeholder="Search"
            className="search"
            onChange={onChangeSearch}
            onKeyDown={onEnter}
          />
          <BsSearch className="bs" />
        </div>
        <div className="categoryContainer">
          <h1 className="head">Category</h1>
          <ul className="ulContainer">
            {categoryOptions.map(eachItem => (
              <Category
                categoryOptions={eachItem}
                key={eachItem.categoryId}
                onClickCatId={onClickCatId}
              />
            ))}
          </ul>
        </div>

        <div className="categoryContainer">
          <h1 className="head">Rating</h1>
          <ul className="ulContainer">
            {ratingsList.map(eachItem => (
              <Rating
                ratingsList={eachItem}
                key={eachItem.ratingId}
                onClickRatId={onClickRatId}
              />
            ))}
          </ul>
        </div>
      </div>
      <button type="button" className="btn" onClick={clear}>
        Clear Filters
      </button>
    </div>
  )
}
export default FiltersGroup
