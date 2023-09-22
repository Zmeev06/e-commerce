import { HeadingProps } from './interfaces'

export const Heading = ({
  children,
  color = 'black',
  fontSize,
  mt,
  mb,
}: HeadingProps) => {
  return (
    <h1
      style={{
        color,
        fontSize,
        marginTop: mt,
        marginBottom: mb,
      }}
    >
      {children}
    </h1>
  )
}
