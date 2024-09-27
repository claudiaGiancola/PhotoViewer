import "./PhotoViewer.css";

interface PhotoViewerProps {
    mainImgUrl: string;
}

const PhotoViewer: React.FC<PhotoViewerProps> = ({mainImgUrl}) => {
    return (
        <div className='images-gallery'>
            <div>
                <h1 className="title">React Photo Viewer</h1>
            </div>

            <div>
                <img className="main-img" src={mainImgUrl} data-testid="main-img"/>
            </div>
        </div>
    );
}

export default PhotoViewer;