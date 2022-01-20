import React from 'react'
import './style.css'
const ImageList = (props) => {
    const { image } = props;
    const images = image.map((image) => {
        return <img key={image.id} src={image.webformatURL} alt='Lỗi tải ảnh' style={{ width: '100%' }} />
    })
    return (
        <div className='all'>
            <div className='row'>
                <div className='column'>
                    {images}
                </div>
            </div>
        </div>

    )
}
export default ImageList;