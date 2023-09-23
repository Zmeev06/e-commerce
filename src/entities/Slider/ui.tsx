import { ReactComponent as Arrow } from '@assets/img/icons/arrow.svg'
import { SliderDots } from 'features/SliderDots'
import { useEffect, useState } from 'react'
import { SliderProps } from './interfaces'
import { nextSlide, prevSlide } from './model'
import styles from './style.module.scss'

export const Slider = ({
  images,
  width = 400,
  height = 300,
  autoPlay = false,
  autoPlayTime = 3000,
  dots = false,
  mt,
  ml,
  mb,
  mr,
  className,
}: SliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        nextSlide(
          currentSlide,
          setCurrentSlide,
          images,
          offset,
          setOffset,
          width,
        )
      }, autoPlayTime)

      return () => {
        clearInterval(interval)
      }
    }
  }, [offset])
  return (
    <div
      className={`${styles.root} ${className}`}
      style={{
        marginTop: mt,
        marginBottom: mb,
        marginLeft: ml,
        marginRight: mr,
      }}
    >
      <button
        className={styles.btn}
        onClick={() =>
          prevSlide(
            currentSlide,
            setCurrentSlide,
            images,
            offset,
            setOffset,
            width,
          )
        }
      >
        <Arrow className={`${styles.arrow} ${styles.arrowLeft}`} />
      </button>
      <div className={styles.slides} style={{ width, height }}>
        <div
          style={{ transform: `translateX(${offset}px)` }}
          className={styles.slidesContainer}
        >
          {images.map((item) => (
            <img key={item.id} src={item.img} alt="" className={styles.img} />
          ))}
        </div>
        {dots && (
          <SliderDots
            count={images.length}
            className={styles.dots}
            currentSlide={currentSlide}
          />
        )}
      </div>

      <button
        className={styles.btn}
        onClick={() =>
          nextSlide(
            currentSlide,
            setCurrentSlide,
            images,
            offset,
            setOffset,
            width,
          )
        }
      >
        <Arrow className={`${styles.arrow} ${styles.arrowRight}`} />
      </button>
    </div>
  )
}
