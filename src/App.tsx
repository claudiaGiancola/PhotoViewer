import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ImageSelector } from './componentsPhotoViewer/imageSelector'

function App() {

  return (
    <>
      <div>
        <h1>React Photo Viewer</h1>
      </div>

      <div>
        <ImageSelector/>
      </div>

    </>
  )
}

export default App