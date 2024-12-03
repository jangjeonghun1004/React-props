
const PropsCard1 = (props) => {
  return (
    <div>
        <h2>{props.title}</h2>
        <span>{props.content}</span>
        <span>Author: {props.author}</span>
    </div>
  )
}

export default PropsCard1

