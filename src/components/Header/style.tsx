import styled from 'styled-components'

export const Container = styled.header<{ isActive: boolean }>`
  position: relative;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 50px 0;
  .header-title {
    line-height: 60px;
    font-size: 28px;
    text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.3);
    font-weight: 600;
    color: ${(props) => props.theme.textColor};
    flex: 1;
    text-align: center;
  }
  button {
    &.header-mode-button {
      right: 0;
      background-color: ${(props) => (props.isActive ? '#FCF9C6' : '#354259')};
    }
    &.header-back-button {
      left: 0;
      background-color: #fcf9c6;
    }
    position: absolute;
    border: none;
    color: ${(props) => (props.isActive ? '#000' : '#fff')};
    display: inline-block;
    border-radius: 100%;
    padding: 0;
    margin: 0;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    z-index: 20;

    @media (min-width: 750px) {
      width: 50px;
      height: 50px;
      line-height: 50px;
      font-size: 30px;
    }
  }
`
