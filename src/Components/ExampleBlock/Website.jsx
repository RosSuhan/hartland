import './ExampleBlock.css'
import ImgaeTwo from '/src/assets/ramblingrose-website.webp'
import ImageThree from '/src/assets/ezette-website.webp'
import ImageFour from '/src/assets/e-commerce-website.webp'

function Website(){
    return(
        <section className="video-profile-section">
            <h2 className="section-heading">WEBSITES</h2>
            <div className="profile-row">
                <div className="profile-info-block">
                    <h3 className="profile-info-heading">Basic Landing page</h3>
                    <h3 className="profile-info-subheading">Rambling Rose</h3>
                    <p className="profile-info-content">
                        A single website landing page provides a streamlined and focused user experience by eliminating distractions and guiding visitors directly to the core message or call to action. It allows businesses to clearly present their value proposition, increase conversion rates, and reduce the chances of visitors getting lost in unnecessary content. With faster load times and a simplified design, a single landing page can improve user engagement and ensure visitors take the desired action quickly and efficiently.
                    </p>
                </div>
                <div className="videoBlock">
                    <img src={ImgaeTwo} width="560" height="315" alt="" className="video" />
                </div>
            </div>
            <div className="profile-row">
                <div className="profile-info-block">
                    <h3 className="profile-info-heading">Full Website (multiple Pages)</h3>
                    <h3 className="profile-info-subheading">Ezet&apos;s Exclusive Tours</h3>
                    <p className="profile-info-content">
                        A website with multiple pages allows businesses to organize and present a broader range of information in a clear, structured way. It enhances SEO by targeting different keywords on each page, improving search engine visibility. With dedicated pages for specific topics, services, or products, users can easily navigate and find detailed content that meets their needs. This design also supports a more comprehensive user experience, building trust and credibility by showcasing the full scope of what the business offers, while still guiding visitors toward important actions.  
                    </p>
                </div>
                <div className="videoBlock">
                    <img src={ImageThree} width="560" height="315" alt="" className="video" />
                </div>
            </div>
            <div className="profile-row">
                <div className="profile-info-block">
                    <h3 className="profile-info-heading">E-Commerce site</h3>
                    <h3 className="profile-info-subheading">GARDEN ROUTE GETAWAY</h3>
                    <p className="profile-info-content">
                        A website with e-commerce capabilities allows businesses to reach a global audience and generate sales 24/7, breaking the limitations of physical location and store hours. It provides a seamless shopping experience, where customers can browse, select, and purchase products or services from the comfort of their homes. E-commerce websites also offer valuable insights through analytics, helping businesses understand customer behaviour and optimize marketing strategies. With integrated payment systems and automated processes, e-commerce sites streamline transactions, inventory management, and customer support, driving efficiency and growth.  
                    </p>
                </div>
                <div className="videoBlock">
                    <img src={ImageFour} width="560" height="315" alt="" className="video" />
                </div>
            </div>
        </section>
    )
}
export default Website