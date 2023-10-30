const Picture = ({ src, fallback, alt, ...props }) => {
  return (
    <picture>
      <source srcSet={src} type='image/webp' />
      <img src={fallback} alt={alt} {...props} />
    </picture>
  )
}

export default Picture