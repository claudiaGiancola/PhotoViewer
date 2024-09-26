import "./PhotoViewer.css";

export function PhotoViewer(props: any) {
    return (
        <div className='images-gallery'>
            <div>
                <h1 className="title">React Photo Viewer</h1>
            </div>

            <div>
                <img className="main-img" src={props.mainImgUrl} data-testid="main-img"/>
            </div>
        </div>
    );
}