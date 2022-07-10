const Warning = ({ tryAgain }) => {
    return (
        <div>
            <p>
                Error in fetching data
            </p>
            <button onClick={tryAgain}>Try again</button>
        </div>
    )
}

export default Warning