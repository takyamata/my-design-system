import React from 'react';

interface PictureProps {
    src: string;
    alt: string;
    width: string;
    height: string;
    className?: string;
    children: React.ReactNode;
}
const Picture: React.FC<PictureProps> = ({
    src,
    alt,
    width,
    height,
    className = '',
    children,
}) => {
    return (
        <picture className={className}>
            {children}
            <img src={src} width={width} height={height} alt={alt} loading='lazy' />
        </picture>
    );
};
export default Picture;
