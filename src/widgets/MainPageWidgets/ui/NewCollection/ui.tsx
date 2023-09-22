import { Card } from 'entities/Card'
import { Button } from 'shared/Button'
import { Content } from 'shared/Content'
import { Heading } from 'shared/Heading'
import { Cards } from './consts'
import styles from './style.module.scss'

export const NewCollection = () => {
  const Items = Cards.slice(-3)
  return (
    <Content maxW="lg">
      <Heading fontSize={40}>Новая коллекция</Heading>
      <div className={styles.goods}>
        {Items.map((item) => (
          <Card
            key={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
      <div className={styles.buttonBlock}>
        <Button
          text="Открыть магазин"
          bg="#fff"
          border="2px solid #6E9C9F"
          color="#6E9C9F"
          width={243}
          height={68}
          className={styles.btn}
        />
      </div>
    </Content>
  )
}
