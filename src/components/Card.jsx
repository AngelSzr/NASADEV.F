const Card = () => {
    return (
        <div className="card text-center mt-5">
            <div className="card-header">
                <h5 className="card-title">Special title treatment</h5>
            </div>
            <div className="card-body">
                <img src="..." className="img-fluid" alt="..." />
                <p className="card-text">Fecha</p>
            </div>
            <div className="card-footer text-muted">
                Explicación
            </div>
        </div>
    )
}

export default Card