import { ImportantPoint } from 'entities/ImportantPoint'
import { Heading } from 'shared/Heading'
import { items } from './consts'
import styles from './style.module.scss'
import { Content } from 'shared/Content'

export const ImportantPoints = () => {
  return (
    <Content maxW='lg'>
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
    </Content>
  )
}
