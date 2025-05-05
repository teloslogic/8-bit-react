import { atom } from 'jotai'

const canvasContext = atom<CanvasRenderingContext2D | undefined>()

export default canvasContext
