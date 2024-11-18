import Accordion from "./Accordion";


const ExtraInfoFilm = ({id,image,title,release_date,original_title, description,director,producer,rt_score}) => {
    return(
        <>
        <div className="container-film container-fluid">
            <div className="row">
                <div className="container-film-img col-md-5">
                    <img src={image} alt="Carátula" className="img-fluid film-img"/>
                </div>

                <div className="col-md-7">
                    <div className="info-film">
                        <h1>{title} ({release_date})</h1>
                        <h2>{original_title}</h2>
                        <p>{description}</p>
                        <h5>Reparto:</h5>
                        <ul className="info-reparto">
                            <li><strong>Director:</strong> {director}</li>
                            <li><strong>Producer:</strong> {producer}</li>
                            <li><strong>Score:</strong> {rt_score}</li>
                        </ul>
                        <div className="info-accordion">
                            <Accordion id={id}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ExtraInfoFilm;