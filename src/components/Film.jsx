import { Link } from "react-router-dom";


const Film = ({id, image, title, description, director}) => {
    return(
        <div className="col">
            <div className="">
                <div className="col">
                    <div className="card">
                        <Link to={`films/${id}`}><img src={image} className="img-fluid img-caratula" alt={title}/></Link>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                        </div>
                        <div className="card-footer">
                            <small className="text-body-secondary">{director}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Film;