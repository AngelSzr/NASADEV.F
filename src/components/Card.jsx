
const Card = ({ data }) => {
    return (
        <div className="card text-center mt-3 w-auto">
            <div className="card-header">
                <h5 className="card-title">{data.title}</h5>
            </div>
            <div className="card-body">
                <img src={data.url} className="img-fluid" alt="..." />
                <p className="card-text">{data.date}</p>
            </div>
            <div className="card-footer text-muted lh-sm">
                {data.explanation}
            </div>
        </div>
    )
}

export default Card