import './Info.css'

function Info() {
    return(
        <section className="whyChooseUsSection">
            <span className="whySubHeading">How we can help you</span>
            <h2 className="whyMainHeading">Why is digital marketing vital in today&apos;s business landscape</h2>
            <div className="mainTabsRow">
                <div className="inlineTabsBlock">
                    <h3 className="inlineTab leftCorner" >Websites</h3>
                    <h3 className="inlineTab" >Content</h3>
                    <h3 className="inlineTab rightCorner" >Management</h3>
                
                    <div className="inlineTabInfo active" id="chooseInfo">
                        <p className="inlineContent">
                            WEBSITES
                        </p>
                        <p className="inlineContent">
                            A secure, responsive HTML website is crucial in today&apos;s digital landscape as it enhances user experience and builds trust. A responsive design ensures that the site functions seamlessly across various devices, from desktops to smartphones, providing a consistent experience for all users. Security is equally important, as it protects sensitive data and builds customer confidence, especially in an era where cyber threats are prevalent. Together, these elements not only improve engagement and accessibility but also contribute to better search engine rankings and overall brand credibility. 
                        </p>
                    </div>

                    <div className="inlineTabInfo" id="missionInfo">
                        <p className="inlineContent">
                            CONTENT
                        </p>
                        <p className="inlineContent">
                            Digital marketing content, such as videos and graphic design, plays a crucial role in promoting your business because it captures attention, conveys messages effectively, and enhances brand visibility. Visual content is more engaging, helping to tell your story in a memorable way, while videos and graphics boost customer interaction across platforms. High-quality visuals create a professional image, build trust, and make your business stand out in a competitive market. 
                        </p>
                    </div>
                    <div className="inlineTabInfo" id="visionInfo">
                        <p className="inlineContent">
                            MANAGEMENT
                        </p>
                        <p className="inlineContent">
                            Social media management and Google Ads are powerful tools for growing your business because they offer targeted reach and measurable results. Social media management helps build relationships, engage with your audience, and boost brand loyalty through consistent and relevant content. Google Ads, on the other hand, provides immediate visibility on search engines, targeting customers who are actively searching for your products or services. Together, they create a balanced approach to digital marketing, combining organic growth with paid reach to drive traffic, increase conversions, and maximize your return on investment. 
                        </p>
                    </div>
                </div>


                <div className="columnTabsBlock">
                    {/* <!-- widespread internet use --> */}
                    <details className="tabsDetails">
                        <summary className="tabsDetailsSummary">
                            Widespread Internet Use
                        </summary>
                        <div className="tabsDetailsContent">
                        <p className="tabsDetailsInfo">
                            Most consumers are online, making digital marketing essential to reach a broader audience. 
                        </p>
                        </div>
                    </details>

                    {/* <!-- targeted advertising --> */}
                    <details className="tabsDetails">
                        <summary className="tabsDetailsSummary">
                            Targeted Advertising
                        </summary>
                        <div className="tabsDetailsContent">
                        <p className="tabsDetailsInfo">
                            Digital platforms allow for precise targeting based on demographics, interests, and behaviour, leading to more effective campaigns. 
                        </p>
                        </div>
                    </details>

                    {/* <!-- Cost-Effectiveness --> */}
                    <details className="tabsDetails">
                        <summary className="tabsDetailsSummary">
                            Cost-Effectiveness
                        </summary>
                        <div className="tabsDetailsContent">
                        <p className="tabsDetailsInfo">
                            Compared to traditional marketing methods, digital marketing often offers a better return on investment (ROI) due to lower costs and better tracking. 
                        </p>
                        </div>
                    </details>

                    {/* <!-- Measurable Results --> */}
                    <details className="tabsDetails">
                        <summary className="tabsDetailsSummary">
                            Measurable Results
                        </summary>
                        <div className="tabsDetailsContent">
                        <p className="tabsDetailsInfo">
                            Digital marketing provides analytics and insights, allowing businesses to measure performance and adjust strategies in real time. 
                        </p>
                        </div>
                    </details>

                    {/* <!-- Engagement and Interaction --> */}
                    <details className="tabsDetails">
                        <summary className="tabsDetailsSummary">
                            Engagement and Interaction
                        </summary>
                        <div className="tabsDetailsContent">
                        <p className="tabsDetailsInfo">
                            Social media and other digital channels enable direct interaction with customers, fostering loyalty and community. 
                        </p>
                        </div>
                    </details>

                    {/* <!-- Branding Visibility --> */}
                    <details className="tabsDetails">
                        <summary className="tabsDetailsSummary">
                            Branding Visibility
                        </summary>
                        <div className="tabsDetailsContent">
                        <p className="tabsDetailsInfo">
                            A strong online presence enhances brand recognition and can lead to increased sales and customer trust.
                        </p>
                        </div>
                    </details>

                    {/* <!-- Adapting to consumer Behaviour --> */}
                    <details className="tabsDetails">
                        <summary className="tabsDetailsSummary">
                            Adapting to consumer Behaviour
                        </summary>
                        <div className="tabsDetailsContent">
                        <p className="tabsDetailsInfo">
                            Consumers increasingly research and shop online, making it essential for businesses to meet them where they are. 
                        </p>
                        </div>
                    </details>

                    {/* <!-- 24-7 Availability --> */}
                    <details className="tabsDetails">
                        <summary className="tabsDetailsSummary">
                            24/7 Availability
                        </summary>
                        <div className="tabsDetailsContent">
                            <p className="tabsDetailsInfo">
                                Digital marketing allows businesses to reach customers at any time, offering convenience and accessibility.
                            </p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
}

export default Info