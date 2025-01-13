import Pagetop from "../Components/PageTop/Pagetop";
import ExampleBlock from "../Components/ExampleBlock/ExampleBlock";

function VideoPage() {
    return(
        <>
            <Pagetop 
                heading="Videography"
                subheading="Video Clips or social media reels"
                text="We specialise in high-quality videography that brings your brand&apos;s story to life. Whether you want to create engaging promotional videos, captivating product demos, or compelling social media content, our expert team ensures every video is tailored to your unique vision. From concept development to post-production, we handle the entire process with precision and creativity, delivering visually stunning content that resonates with your audience and drives results. Let us help you elevate your brand through the power of video!"
                image="/src/assets/videography.webp"
            />
            <ExampleBlock 
                heading="VIDEOS"
            />
        </>
    )
}
export default VideoPage