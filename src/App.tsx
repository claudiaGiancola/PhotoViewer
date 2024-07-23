import { useState } from 'react'
import './App.css'
import { PhotoViewer } from './componentsPhotoViewer/PhotoViewer'
import { ImageSelector } from './componentsPhotoViewer/imageSelector'

function App() {

  const [mainImgUrl, setMainImgUrl] = useState("https://images.pexels.com/photos/3359734/pexels-photo-3359734.jpeg");

  const [selectedThumb, setSelectedThumb] = useState(mainImgUrl);
  
  function selectMainImg(url: string) {
    setMainImgUrl(url);
    setSelectedThumb(url);
  }

  return (
    <>
      <div>
        <PhotoViewer mainImgUrl={mainImgUrl} />
      </div>

      <div>
        <ImageSelector selectImg={selectMainImg} selectedImgUrl={selectedThumb} />
      </div>

    </>
  )
}

export default App