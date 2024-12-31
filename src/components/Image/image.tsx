import React from 'react';
interface ImageProps {
    src: string;
    type: string;
    media?: string;
    width: string;
    height: string;
    sp?: boolean;
    pc?: boolean;
}

const Image: React.FC<ImageProps> = ({ src, type, media, width, height, sp, pc }) => {
    const responsive = sp ? "(max-width: 834px)" : pc ? "(min-width: 835px)" : media;
    return (
        <source
            type={`type/${type}`}
            srcSet={src}
            width={width}
            height={height}
            media={responsive}
        />
    );
};
export default Image;
