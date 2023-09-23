import {
  ImportantPoints,
  NewCollection,
  Team,
  TopBlock,
} from 'widgets/MainPageWidgets'

export const MainPage = () => {
  return (
    <div>
      <TopBlock />
      <NewCollection />
      <ImportantPoints />
      <Team />
    </div>
  )
}
