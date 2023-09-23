import { IImage } from '../interfaces'

export const nextSlide = (
  currentSlide: number,
  setCurrentSlide: (newSlide: number) => void,
  images: IImage[],
  offset: number,
  setOffset: (offset: number) => void,
  width: number,
) => {
  if (currentSlide !== images.length - 1) {
    setCurrentSlide(currentSlide + 1)
    setOffset(offset - width)
  } else {
    setCurrentSlide(0)
    setOffset(0)
  }
}

export const prevSlide = (
  currentSlide: number,
  setCurrentSlide: (newSlide: number) => void,
  images: IImage[],
  offset: number,
  setOffset: (offset: number) => void,
  width: number,
) => {
  if (currentSlide !== 0) {
    setCurrentSlide(currentSlide - 1)
    setOffset(offset + width)
  } else {
    setCurrentSlide(images.length - 1)
    setOffset(-(width * (images.length - 1)))
  }
}
