import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { isDarkMode } from 'store'
import { Container } from './style'

export const Header = () => {
  const [isDark, setIsDark] = useRecoilState(isDarkMode)
  const { coinId } = useParams()
  return (
    <Container isActive={isDark}>
      <h1 className='header-title'>
        {coinId ? coinId.replace('-', ' ').toUpperCase() : 'Coin Tracker'}
      </h1>
      <button
        className='header-mode-button'
        onClick={() => setIsDark((prev) => !prev)}
      >
        {isDark ? '🌞' : '☾'}
      </button>
      {coinId && (
        <button className='header-back-button'>
          <Link to='/'>🔙</Link>
        </button>
      )}
    </Container>
  )
}
