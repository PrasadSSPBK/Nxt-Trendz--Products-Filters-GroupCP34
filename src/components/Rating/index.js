import './index.css'

const Rating = props => {
  const {ratingsList, onClickRatId} = props
  const {imageUrl, ratingId} = ratingsList
  const onClickRat = () => {
    onClickRatId(ratingId)
  }

  return (
    <ul className="cate">
      <li className="listItem" onClick={onClickRat}>
        <img src={imageUrl} alt={`rating ${ratingId}`} className="img" />
      </li>
    </ul>
  )
}
export default Rating
