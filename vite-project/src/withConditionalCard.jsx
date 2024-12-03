
function withConditionalCard(WrappedComponent) {
    return (
        function ConditionalCard({disabled, ...props}) {
            const cardStyle = {
                border: "1px solid red",
                opacity: disabled ? "0.5" : "1"
            }

            return(
               <div style={cardStyle}>
                    <WrappedComponent {...props} />
               </div>
            )
        }
    )
}

export default withConditionalCard