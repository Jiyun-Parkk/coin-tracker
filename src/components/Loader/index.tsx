import styled from 'styled-components'

export const LoadText = styled.span`
  display: block;
  text-align: center;
  color: ${(props) => props.theme.textColor};
  font-size: 28px;
`
export const Loader = () => {
  return <LoadText>Please wait for a moment...</LoadText>
}
