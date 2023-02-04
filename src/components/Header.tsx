import styled from 'styled-components'
import ToggleTheme from './ToggleTheme'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: ${props => props.theme.colors.tertiaryTextColor};
  }
`

const Header = () => {
  return (
    <Wrapper>
      <h1>calc</h1>
      <ToggleTheme />
    </Wrapper>
  )
}

export default Header