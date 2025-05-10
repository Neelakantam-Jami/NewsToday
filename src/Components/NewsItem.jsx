import image from '../assets/newsimg.jpg'

export const NewsItem = ({title,description,src,url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block m-3 p-2" style={{maxWidth:"345px"}}>
        <img src={src?src:image} className="card-img-top" style={{height:"200px", width:"325px"}} />
        <div className="card-body">
            <h5 className="card-title">{title.slice(0,50)}</h5>
            <p className="card-text">{description?description.slice(0,90):"Lorem ipsum, dolor sit amet consectetur adipisinissimos unde provident deleniti ea. "}</p>
            <a href={url} target="_blank" className="btn btn-primary">Read More</a>
        </div>
    </div>
  );
}
