
// Destructuring
const PropsCard2 = ({title, content, author}) => {
    return(
        <div>
            <h2>{title}</h2>
            <span>{content}</span>
            <span>{author}</span>
        </div>
    )
}

export default PropsCard2