import { ReactNode } from 'react';

interface ImageProps {
    src: string,
    alt: string,
}

interface HeaderProps {
    image: ImageProps,
    children: ReactNode
}
function Header({image, children}: HeaderProps) {
    return (
        <div>
            {children}
            <img src={image.src} alt={image.alt} />
        </div>
    )
}

export default Header;