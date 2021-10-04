import React from 'react'
import ContentLoader from 'react-content-loader'

export const Loader = () => {
    return (
        <ContentLoader 
            speed={2}
            width={900}
            height={400}
            viewBox="0 0 900 400"
            backgroundColor="#F48FB1"
            foregroundColor="#ecebeb">
            <rect x="0" y="0" rx="11" ry="11" width="880" height="400" />
        </ContentLoader>
    )
}
