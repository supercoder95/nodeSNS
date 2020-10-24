import React from 'react'
import PropTypes from 'prop-types'

const ImageZoom = ({ images, onClose }) => {

}

ImageZoom.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClose: PropTypes.func.isRequired,
}

export default ImageZoom