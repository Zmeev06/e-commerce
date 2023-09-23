import { IImage } from '.'

export interface SliderProps {
  images: IImage[]
  autoPlay?: boolean
  autoPlayTime?: number
  width?: number
  height?: number
  dots?: boolean
  mt?: number
  ml?: number
  mr?: number 
  mb?: number
  className?: string
}
