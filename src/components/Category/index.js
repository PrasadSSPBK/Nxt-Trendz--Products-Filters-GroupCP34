import './index.css'

const Category = props => {
  const {categoryOptions, onClickCatId} = props
  const {name, categoryId} = categoryOptions

  const onClickCat = () => {
    onClickCatId(categoryId)
  }

  return (
    <ul className="cate">
      <li className="listItem" onClick={onClickCat}>
        <p> {name}</p>
      </li>
    </ul>
  )
}
export default Category
