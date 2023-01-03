## Coin Tracker

## Live

<div align=center>
  <img src="https://user-images.githubusercontent.com/72537762/188574911-6335febb-af7f-4c81-8524-bbe15baa0fbc.gif" />
 </div>

## Project start

```
  npm run start
```

## Used Skills

<img src ="https://img.shields.io/badge/react-61DAFB.svg?&style=for-the-badge&logo=react&logoColor=white" align="center"/>
<img src ="https://img.shields.io/badge/typescript-1572B6.svg?&style=for-the-badge&logo=typescript&logoColor=white" align="center"/>
<img src ="https://img.shields.io/badge/recoil-D3002D.svg?&style=for-the-badge&logo=recoil&logoColor=white" align="center"/>
<img src ="https://img.shields.io/badge/react_query-FF4154.svg?&style=for-the-badge&logo=react-query&logoColor=white" align="center"/>
<img src ="https://img.shields.io/badge/styled_components-DB7093.svg?&style=for-the-badge&logo=styled-components&logoColor=white" align="center"/>

## 배포

<img src ="https://img.shields.io/badge/gh_pages-F05032.svg?&style=for-the-badge&logo=git&logoColor=white" align="center"/>

## Project 소개

coin paprika의 무료 API를 사용해 만든 토이 프로젝트 입니다.
현재 있는 코인 1위~100위까지 리스트를 보여주고,코인 배너를 누르면 해당 코인의 시장상황을 실시간으로 확인 할 수 있습니다.

## Point

### 1. 구현

`Typescript`, `React`으로 개발되었습니다.
`chart.js` 라이브러리로 현재 코인의 시장상황을 시각화 하여 보여주었습니다.

### 2. style

`styled-component` 라이브러리를 활용해 style을 컴포넌트화 하여 보다 구조적으로 UI 컴포넌트를 구성하였습니다. 그리고 themeProvider를 활용하여 다크모드와 라이트모드를 구현하였습니다.

### 3. 통신

`Axios`와, `react-query`를 사용해 `coin paprika`의 데이터를 받아왔고, `api.ts`에서 데이터별로 api를 관리하여 보기 쉽게 구성하였습니다.

### 4. 상태관리

상태관리는 `recoil` 라이브러리를 활용하였습니다.
