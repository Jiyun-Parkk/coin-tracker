import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  ul {
    li {
      margin: 0 auto;
      background-color: ${(props) => props.theme.labelColor};
      color: ${(props) => props.theme.textColor};
      margin-bottom: 10px;
      height: 50px;
      border-radius: 15px;
      transition: transform 0.2s ease-in;
      box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.2);
      a {
        display: flex;
        font-size: 18px;
        transition: color 0.2s ease-in;
        align-items: center;
        line-height: 50px;
        font-weight: 600;
        div {
          margin: 0px 10px 0 20px;
          transition: transform 0.2s ease-in;
        }
      }
      &:hover {
        transform: scale(1.01);
        a {
          color: ${(props) => props.theme.accentColor};
        }
        div {
          transform: scale(1.03);
        }
      }
    }
  }
`
export const CoinIcon = styled.div<{ logo: string }>`
  background: url('${(props) => props.logo}') no-repeat center / cover;
  width: 25px;
  height: 25px;
`
