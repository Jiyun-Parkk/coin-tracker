import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  .coin-overview-box {
    display: flex;
    justify-content: space-between;
    background-color: ${(props) => props.theme.labelColor};
    padding: 10px 20px;
    border-radius: 10px;
    .coin-view-items {
      display: flex;
      flex-direction: column;
      align-items: center;
      span:first-child {
        color: ${(props) => props.theme.textColor};
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 5px;
      }
      span:last-child {
        color: ${(props) => props.theme.accentColor};
      }
    }
  }
  .coin-description {
    color: ${(props) => props.theme.textColor};
    margin: 20px 0px;
  }
  .coin-info-tab-box {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 25px 0px;
    gap: 10px;
  }
`
export const Tabs = styled.span<{ isActive: boolean }>`
  height: 50px;
  line-height: 50px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  background-color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.labelColor};
  border-radius: 10px;
  color: ${(props) => (props.isActive ? '#fff' : props.theme.textColor)};
  a {
    display: block;
  }
`
