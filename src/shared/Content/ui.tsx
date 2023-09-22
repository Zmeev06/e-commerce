import { ContentProps } from './interfaces'

export const Content = ({ children, maxW, mt }: ContentProps) => {
  return (
    <div
      style={{
        maxWidth:
          maxW === 'sm'
            ? '50vw'
            : maxW === 'md'
            ? '65vw'
            : // eslint-disable-next-line unicorn/no-nested-ternary
            maxW === 'lg'
            ? '80vw'
            : '100vw',
        margin: '0 auto',
        marginTop: mt,
      }}
    >
      {children}
    </div>
  )
}
