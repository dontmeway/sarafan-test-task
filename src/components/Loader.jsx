import React from 'react'
import ContentLoader from 'react-content-loader'

export const Loader = () => {
    return (
        <ContentLoader 
            speed={2}
            width={900}
            height={315}
            viewBox="0 0 900 315"
            backgroundColor="#6e3f98"
            foregroundColor="#ecebeb">
            <rect x="0" y="0" rx="20" ry="20" width="900" height="315" />
        </ContentLoader>
    )
}
