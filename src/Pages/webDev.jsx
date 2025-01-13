import Pagetop from "../Components/PageTop/Pagetop"
import Website from "../Components/ExampleBlock/Website"

function WebsitePage(){
    return(
        <>
            <Pagetop 
                heading="Website Development"
                subheading="Our focus is on building responsive HTML coding"
                text="We pride ourselves in creating custom websites that not only look stunning but also drive engagement and conversions. Our HTML web development services combine aesthetics with functionality to deliver a seamless user experience across all devices. Whether you&apos;re starting from scratch or need a redesign, we build responsive, user-friendly websites that reflect your brand&apos;s identity and meet your business&apos;s goals. From intuitive navigation to modern design trends, we ensure your website stands out and keeps visitors returning for more."
                image="../assets/website-development.webp"
            />
            <Website />
        </>
    )
}
export default WebsitePage