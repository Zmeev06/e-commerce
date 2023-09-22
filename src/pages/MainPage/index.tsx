import { ImportantPoints } from 'widgets/ImportantPoints'
import { NewCollection, TopBlock } from 'widgets/MainPageWidgets'

export const MainPage = () => {
  return (
    <div>
      <TopBlock />
      <NewCollection />
      <ImportantPoints />
    </div>
  )
}
