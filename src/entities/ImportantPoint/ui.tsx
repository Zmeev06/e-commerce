import { Heading } from 'shared/Heading'
import { ImportantPointProps } from './interfaces'
import styles from './style.module.scss'

export const ImportantPoint = ({ img, text, title }: ImportantPointProps) => {
  return (
    <div className={styles.root}>
      <img src={img} alt="" className={styles.img} />
      <Heading fontSize={25} mt={37} mb={24}>
        {title}
      </Heading>
      <p className={styles.text}>{text}</p>
    </div>
  )
}
