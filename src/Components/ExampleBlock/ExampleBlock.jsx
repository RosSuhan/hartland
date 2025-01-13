import './ExampleBlock.css'


function ExampleBlock(props) {
    return(
        <section className="video-profile-section">
            <h2 className="section-heading">{props.heading}</h2>
            <div className="profile-row">
                <div className="profile-info-block">
                    <h3 className="profile-info-heading">Full Video Production</h3>
                    <h3 className="profile-info-subheading">Herold Meander Production</h3>
                    <p className="profile-info-content">
                        Herold Meander is a small village in the mountains above George, Western Cape. Currently developing the community by creating job opportunities and more. 
                    </p>
                </div>
                <div className="videoBlock">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/xtsr1batOZY?si=r6zwllFVV1Bu6gQ8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="video"></iframe>
                </div>
            </div>
            <div className="profile-row">
                <div className="profile-info-block">
                    <h3 className="profile-info-heading">Graphic Animation</h3>
                    <h3 className="profile-info-subheading">Pennyworth Accounting Services</h3>
                    <p className="profile-info-content">
                        Pennyworth Accounting Services specializes in providing expert tax solutions and comprehensive accounting services. With a focus on accuracy and efficiency, Pennyworth helps clients manage their finances with confidence and ease. 
                    </p>
                </div>
                <div className="videoBlock">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/o8PPxZdM5GA?si=s2vUDvXYi4kCGtms" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="video"></iframe>
                </div>
            </div>
            <div className="profile-row">
                <div className="profile-info-block">
                    <h3 className="profile-info-heading">Interview Style Productions</h3>
                    <h3 className="profile-info-subheading">Run Garden Route</h3>
                    <p className="profile-info-content">
                        Sharing someone&apos;s story and passion through video media can share so much more to the client than a normal post. With RUN Garden Route we could showcase her heart with the viewer to bring across why she would be the best choice for a jogging tour. 
                    </p>
                </div>
                <div className="videoBlock">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/dEKnBIqjYuM?si=wAEhj1oiu_TC_xEn" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="video"></iframe>
                </div>
            </div>
            <div className="profile-row">
                <div className="profile-info-block">
                    <h3 className="profile-info-heading">Interview Style Productions</h3>
                    <h3 className="profile-info-subheading">Kaukou Honeybush Tea Production</h3>
                    <p className="profile-info-content">
                        Honeybush Fynbos is grown on the slopes of the Outeniqua Mountains. Processed to give you the flavor sensation of the mountains of the Southern Cape.  
                    </p>
                </div>
                <div className="videoBlock">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/-NWiyF9lsJ8?si=IO5KzexIHSC2n9fp" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="video"></iframe>
                </div>
            </div>
        </section>
    )
}

export default ExampleBlock