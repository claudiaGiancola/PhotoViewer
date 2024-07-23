import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PhotoViewer } from './componentsPhotoViewer/PhotoViewer'
import { ImageSelector } from './componentsPhotoViewer/imageSelector'

function App() {

  return (
    <>
      <div>
        <h1>React Photo Viewer</h1>
        <PhotoViewer src={"https://images.pexels.com/photos/3359734/pexels-photo-3359734.jpeg"} />
        {/* <PhotoViewer src={mainImgUrl} /> */}
      </div>

      <div>
        <ImageSelector/>
      </div>

    </>
  )
}

export default App