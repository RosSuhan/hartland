import './Pagetop.css'

function Pagetop(props) {
    return(
        <section className="page-intro-section">
            <div className="page-intro-infoBlock">
              <h1 className="page-intro-heading">{props.heading}</h1>
              <h2 className="page-intro-subheading">{props.subheading}</h2>
              <p>
                  {props.text}
              </p>
            </div>  
            <img src={props.image} width="500" height="350" alt="" className="page-intro-image" />
          </section>   
    );
}
export default Pagetop