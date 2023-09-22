import arrow from '@assets/img/icons/arrow.svg'
import { useState } from 'react'
import { CardProps } from './interfaces'
import styles from './style.module.scss'

export const Card = ({ img, price, name }: CardProps) => {
  const [isHover, setIsHover] = useState(false)
  return (
    <div className={styles.root}>
      <div
        className={styles.imgBlock}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <img src={img} alt={name} className={styles.img} />
        <div className={`${styles.bg} ${isHover && styles.bgActive}`}>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className={styles.textBlock}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>${price}</p>
      </div>
    </div>
  )
}
