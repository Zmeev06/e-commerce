import { ImportantPoint } from 'entities/ImportantPoint'
import { Heading } from 'shared/Heading'
import { items } from './consts'
import styles from './style.module.scss'

export const ImportantPoints = () => {
  return (
    <div className={styles.root}>
      <Heading fontSize={40} mb={92} mt={130}>
        Что для нас важно
      </Heading>
      <div className={styles.items}>
        {items.map((item) => (
          <ImportantPoint
            key={item.id}
            img={item.img}
            text={item.text}
            title={item.title}
          />
        ))}
      </div>
    </div>
  )
}
