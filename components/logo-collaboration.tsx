import Image from 'next/image'

interface LogoColaborationProps {
  src: string;
  size?: number;
  alt?: string;
}

const LogoCollaboration = (props: LogoColaborationProps) => {
  const { src, alt, size} = props;

  return (
  <div className="filter grayscale hover:grayscale-0 transition-all duration-500 dark:brightness-200">
    <Image
      src={src}
      width={size || 0}
      height={size || 500}
      alt={alt || ''}
    />
  </div>
)
}

export default LogoCollaboration