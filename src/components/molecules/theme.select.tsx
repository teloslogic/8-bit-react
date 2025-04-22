import { useAtom } from 'jotai'
import { FC } from 'react'

import themeState from '../../state/theme.state'
import Moon from '../atoms/moon'
import Sun from '../atoms/sun'

export type ThemeSelectProps = object

const ThemeSelect: FC<ThemeSelectProps> = () => {
  const [theme, setTheme] = useAtom<'light' | 'dark'>(themeState)

  return (
    <div>
      {theme === 'light' ? (
        <Moon onClickHandler={() => setTheme('dark')} />
      ) : (
        <Sun onClickHandler={() => setTheme('light')} />
      )}
    </div>
  )
}

export default ThemeSelect
