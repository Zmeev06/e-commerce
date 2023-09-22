import bottomImg from '@assets/img/bottomImg.png'
import mainImg from '@assets/img/mainImg.png'
import topImg from '@assets/img/topImg.png'
import { Button } from 'shared/Button'
import styles from './style.module.scss'

export const TopBlock = () => {
  return (
    <div className={styles.root}>
      <div className={styles.leftBlock}>
        <h2 className={styles.title}>Новые поступления в этом сезоне</h2>
        <p className={styles.text}>
          Утонченные сочетания и бархатные оттенки - вот то, что вы искали в
          этом сезоне. Время исследовать.
        </p>
        <Button
          text="Открыть магазин"
          width={243}
          height={68}
          className={styles.btn}
        />
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.imgBlock}>
          <img src={mainImg} alt="" className={styles.mainImg} />
          <img src={topImg} alt="" className={styles.topImg} />
          <img src={bottomImg} alt="" className={styles.bottomImg} />
        </div>
      </div>
    </div>
  )
}
