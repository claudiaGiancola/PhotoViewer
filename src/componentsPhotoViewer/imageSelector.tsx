import React from 'react';
import "./PhotoViewer.css";

export const imageUrls = [
    "https://images.pexels.com/photos/3359734/pexels-photo-3359734.jpeg",
    "https://images.pexels.com/photos/713663/pexels-photo-713663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", "https://news.ufl.edu/media/newsufledu/images/2019/04/dragon-hero.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/1200px-Smaug_par_David_Demaret.jpg",
    "https://miro.medium.com/v2/resize:fit:1400/1*xYLXhsrGQauxSmTHXCOgiA.jpeg",
    "https://helios-i.mashable.com/imagery/articles/00cUWUjrL7VyNFJBybsy1NH/hero-image.fill.size_1200x900.v1634604910.png",
    "https://static1.colliderimages.com/wordpress/wp-content/uploads/2024/07/house-of-the-dragon-all-of-the-dragons-explained.jpg",
    "https://cdn.pixabay.com/photo/2023/11/01/12/30/dragon-8357474_1280.png",
    "https://cdn.pixabay.com/photo/2023/07/31/16/28/fantasy-8161364_1280.png"
];

interface ImageSelectorProps {
    selectImg : (url:string) => void;
    selectedImgUrl: string;
}

export function ImageSelector(props: ImageSelectorProps) {

    return (
        <div>

            <div className="select-img">
                Select your main dragon:
            </div>

            <div className='thumbnails-gallery' data-testid="thumbnails-gallery">

                {
                    imageUrls.map(image => {
                        return <img className={`thumbnails ${props.selectedImgUrl === image ? "selected-thumb" : ""}`} data-testid={`selected-thumb-${imageUrls.indexOf(image)}`} onClick={() => (props.selectImg(image))} src={image} />
                    })
                }

            </div>
        </div>
    )

}