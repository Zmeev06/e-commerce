import img1 from '@assets/img/img1.jpg'
import { Slider } from 'entities/Slider/ui'
import { Content } from 'shared/Content'
import { Heading } from 'shared/Heading'
import styles from './style.module.scss'

const img = [
  { id: '1', img: img1 },
  { id: '2', img: img1 },
  { id: '3', img: img1 },
  { id: '4', img: img1 },
]

export const Team = () => {
  return (
    <Content maxW="lg" mt={130} mb={130}>
      <Heading fontSize={40}>Команда мечты Womazing</Heading>
      <div className={styles.content}>
        <Slider
          images={img}
          dots
          width={730}
          height={500}
          autoPlay
          autoPlayTime={2000}
          mt={92}
          className={styles.slider}
        />
        <div className={styles.textBlock}>
          <Heading fontSize={25}>Для каждой</Heading>
          <p className={styles.text}>
            Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
            <br />
            <br />
            Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно
            подчеркивают достоинства каждой девушки.
          </p>
          <p className={styles.link}>Подробнее о бренде</p>
        </div>
      </div>
    </Content>
  )
}
