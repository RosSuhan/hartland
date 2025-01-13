// import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import './HeroSlider.css'

export default () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 3000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
            <div className="mySlides">
                <img src="src/assets/HB24-slide-1.webp" alt="" className='sliderBackgroundImage' />
                <div className="sliderInnerBlock">
                    <span className="sliderNumber">1</span>
                    <div className="sliderInfo">
                        <span className="sliderSubHeading">Creativity In Space</span>
                        <h2 className="sliderHeading">Videography</h2>
                    </div>
                </div>
            </div>
        </div>

        <div className="keen-slider__slide number-slide2">
            <div className="mySlides">
                <img src="src/assets/hd24-slide-3.webp" alt="" className='sliderBackgroundImage' />
                <div className="sliderInnerBlock">
                    <span className="sliderNumber">2</span>
                    <div className="sliderInfo">
                        <span className="sliderSubHeading">Creativity In Space</span>
                        <h2 className="sliderHeading">Website</h2>
                        <div className="btn-row">
                            <ion-icon name="chevron-back-outline" className="btn"></ion-icon>
                            <ion-icon name="chevron-forward-outline" className="btn"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="keen-slider__slide number-slide3">
        <div className="mySlides">
                    <img src="src/assets/hb24-slide-2.webp" alt="" className='sliderBackgroundImage' />
                    <div className="sliderInnerBlock">
                        <span className="sliderNumber">3</span>
                        <div className="sliderInfo">
                            <span className="sliderSubHeading">Creativity In Space</span>
                            <h2 className="sliderHeading">Social Media Marketing</h2>
                            <div className="btn-row">
                                <ion-icon name="chevron-back-outline" className="btn"></ion-icon>
                                <ion-icon name="chevron-forward-outline" className="btn"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

        
        <div className="keen-slider__slide number-slide4">
            <div className="mySlides">
                <img src="src/assets/hb24-slide-4.webp" alt="" className='sliderBackgroundImage' />
                <div className="sliderInnerBlock">
                    <span className="sliderNumber">4</span>
                    <div className="sliderInfo">
                        <span className="sliderSubHeading">Creativity In Space</span>
                        <h2 className="sliderHeading">Google Ads</h2>
                        <div className="btn-row">
                            <ion-icon name="chevron-back-outline" className="btn"></ion-icon>
                            <ion-icon name="chevron-forward-outline" className="btn"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </>
  )
}
