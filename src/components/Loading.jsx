import loading from "../assets/img/studio-ghibli.gif"

const Loading = () =>{
    return (
        <div className="d-flex align-items-center">
            <img id="img-loading" src={loading} alt="loading"  />
        </div>
    )
}

export default Loading;