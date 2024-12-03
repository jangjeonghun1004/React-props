import PropTypes from 'prop-types'

const PropsCard1 = (props) => {
  return (
    <div>
        <h2>{props.title}</h2>
        <span>content: {props.content}</span>
        <span>, Author: {props.author}</span>
        <span>, number: {props.number}</span>
        <span>, bool: {String(props.isBool)}</span>
    </div>
  )
}
PropsCard1.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
  number: PropTypes.number,
  isBool: PropTypes.bool
}

export default PropsCard1

