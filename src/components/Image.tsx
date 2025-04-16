// Simple Image component to handle the image rendering
// This is a simplified version since we don't have Next.js Image component

function Image({ src, alt, width, height, className, ...props }) {
  return (
    <img
      src={src || "/placeholder.svg"}
      alt={alt || ""}
      width={width}
      height={height}
      className={className}
      {...props}
    />
  )
}

export default Image
