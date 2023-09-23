import { SliderDotsProps } from './interfaces'
import styles from './style.module.scss'

export const SliderDots = ({
  count,
  className,
  currentSlide,
}: SliderDotsProps) => {
  return (
    <div className={`${styles.root} ${className}`}>
      {[...new Array(count)].map((_, i) => (
        <div
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          className={`${styles.dot} ${currentSlide === i && styles.active}`}
        />
      ))}
    </div>
  )
}
