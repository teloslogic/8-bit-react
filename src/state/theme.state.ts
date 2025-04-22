import { atom } from 'jotai'

const themeState = atom<'light' | 'dark'>('light')

export default themeState
