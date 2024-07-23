import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PhotoViewer } from './componentsPhotoViewer/PhotoViewer'
import { ImageSelector } from './componentsPhotoViewer/imageSelector'

function App() {

  const [mainImgUrl, setMainImgUrl] = useState("https://images.pexels.com/photos/3359734/pexels-photo-3359734.jpeg");

  function selectImg(url: string) {
      setMainImgUrl(url);
  }

  return (
    <>
      <div>
      <PhotoViewer mainImgUrl={mainImgUrl}/>
      </div>

      <div>
        <ImageSelector selectImg={selectImg}/>
      </div>

    </>
  )
}

export default App