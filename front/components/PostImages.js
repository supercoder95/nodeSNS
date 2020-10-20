import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

const PostImages = ({ images }) => {
    const [setShowImageZoom,, setShowImagesZoom] = useState(false)

    const onZoom = useCallback(() => {
        setShowImageZoom(true);
    })
    if (images.length === 1) {
        return(
            <>
                <img role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom} />
            </>
        )
    }

    if (images.length === 2) {
        return (
            <>
            <img role="presentation" width="50%" src={images[0].src} alt={images[0].src} onClick={onZoom} />
            <img role="presentation" width="50%" src={images[1].src} alt={images[1].src} onClick={onZoom} />
            </>
        )
    }

    if (images.length === 3) {
        return (
            <>
            <img role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom} />
            <div
                role="presentation"
                style={{
                display: 'inline-block', 
                width: '50%', 
                textAlign: 'center',
                verticalAlign: 'middle'
                // onClick={onZoom},
            }}
            >
            </div>
            </>
        )
    }
    return (
        <div>구현중...</div>
    )
}

PostImages.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
}

export default PostImages