import logo from '@assets/img/icons/logo.svg'
import phone from '@assets/img/icons/phone.svg'
import { CartBtn } from 'features/CartBtn'
import { Content } from 'shared/Content'
import styles from './style.module.scss'

export const Header = () => {
  return (
    <Content maxW="lg">
      <div className={styles.root}>
        <img src={logo} alt="" className={styles.logo} />
        <ul className={styles.nav}>
          <li className={styles.navItem}>Главная</li>
          <li className={styles.navItem}>Магазин</li>
          <li className={styles.navItem}>О бренде</li>
          <li className={styles.navItem}>Контакты</li>
        </ul>
        <div className={styles.phoneBlock}>
          <img src={phone} alt="" className={styles.phoneIcon} />
          <p className={styles.phoneNumber}>+7 (495) 823-54-12</p>
        </div>
        <CartBtn />
      </div>
    </Content>
  )
}
