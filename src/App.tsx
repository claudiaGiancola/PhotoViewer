import { useState } from 'react'
import './App.css'
import { PhotoViewer } from './componentsPhotoViewer/PhotoViewer'
import { ImageSelector } from './componentsPhotoViewer/imageSelector'

function App() {

  const [mainImgUrl, setMainImgUrl] = useState("https://images.pexels.com/photos/3359734/pexels-photo-3359734.jpeg");

  const [isActive, setActive] = useState(false);
  const [selectedImgUrl, setSelectedImgUrl] = useState(mainImgUrl);

  function selectImg(url: string) {
    setMainImgUrl(url);
    setSelectedImgUrl(url);
  }

  function toggleActive() {
    setActive(!isActive);
  }

  return (
    <>
      <div>
        <PhotoViewer mainImgUrl={mainImgUrl} />
      </div>

      <div>
        <ImageSelector selectImg={selectImg} toggleActive={toggleActive} selectedImgUrl={selectedImgUrl} />
      </div>

    </>
  )
}

export default App