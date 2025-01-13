import './Plans.css'
import SectionImage from '/src/assets/plans-and-structure.webp'

function Plans() {
    return(
        <section className="section3">
          <img src={SectionImage} alt="" width="650" height="400" className="section3-img" />
          <article className="section3Article">
            <h2 className="section3Heading">Plans and strategies that improve your online presence</h2>
            <p className="section3Paragraph">
              A well-crafted digital marketing plan and strategy are essential to improving your online presence because they provide a clear roadmap for success. With tailored strategies, we can help you target the right audience, enhance your brand visibility, and drive meaningful engagement across digital channels. By analyzing your current performance and industry trends, we design data-driven campaigns that optimize content, SEO, social media, and paid advertising efforts. This cohesive approach boosts your online traffic and ensures that every marketing effort contributes to your business goals, leading to long-term growth and a stronger digital footprint. 
            </p>
            
            <ul className="section3List">
              <li className="section3Item">
                <ion-icon name="checkmark-circle-outline" className="section3Icon"></ion-icon>
                  Market Research
              </li>
              <li className="section3Item">
                <ion-icon name="checkmark-circle-outline" className="section3Icon"></ion-icon>
                  Digital Planning
              </li>
              <li className="section3Item">
                <ion-icon name="checkmark-circle-outline" className="section3Icon"></ion-icon>
                  Implementation
              </li>
              <li className="section3Item">
                <ion-icon name="checkmark-circle-outline" className="section3Icon"></ion-icon>
                  Reporting
              </li>
            </ul>
          </article>
        </section>
    );
}

export default Plans