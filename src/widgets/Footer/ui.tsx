import styles from './style.module.scss'
import logo from '@assets/img/icons/logo.svg'
import payments from '@assets/img/pay.svg'

export const Footer = ({}) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <div className={styles.rightBlock}>
          <img src={logo} alt="" className={styles.logo} />
          <div className={styles.rightText}>
            <p className={styles.text}>© Все права защищены</p>
            <p className={styles.link}>Политика конфиденциальности</p>
            <p className={styles.link}>Публичная оферта</p>
          </div>
        </div>
        <div className={styles.leftBlock}>
          <p>+7 (495) 823-54-12</p>
          <p>hello@womazing.com</p>
          <div className={styles.socialNetworks}></div>
          <img src={payments} />
        </div>
      </div>
    </div>
  )
}
