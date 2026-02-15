import { Image } from 'react-bootstrap'

export const ProfileImage = ({ src, alt, size = '15vw', minSize = '200px' }) => {
    return (
        <div style={{ position: 'relative' }}>
            {/* Blurred background using the same image */}
            <div 
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    filter: 'blur(35px) brightness(1.5)',
                    transform: 'scale(1.15, 1.05)',
                    opacity: 0.7,
                    background: `url(${src}) no-repeat center center`,
                    backgroundSize: 'contain',
                    zIndex: 1
                }}
            />
            <Image
                src={src}
                roundedCircle
                alt={alt}
                loading='lazy'
                decoding='async'
                style={{ 
                    height: 'auto', 
                    width: size, 
                    minWidth: minSize,
                    position: 'relative',
                    zIndex: 2
                }}
            />
        </div>
    )
}
