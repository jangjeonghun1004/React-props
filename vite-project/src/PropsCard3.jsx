
// default & spread
function PropsCard3({
    title = "default title",
    content = "default content",
    author = "default author"
}) {
    return(
        <div>
            <h2>{title}</h2>
            <span>{content}</span>
            <span>{author}</span>
        </div>
    )
}

export default PropsCard3