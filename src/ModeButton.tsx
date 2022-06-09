import styled from "styled-components";

export const ModeButton = styled.button<{ isActive: boolean }>`
	position: absolute;
	top: 4px;
	right: 20px;
	border: none;
	color: ${(props) => (props.isActive ? "#fff" : "#000")};
	display: inline-block;
	background-color: ${(props) => (props.isActive ? "#354259" : "#FCF9C6")};
	border-radius: 40px;
	width: 50px;
	height: 50px;
	line-height: 50px;
	font-size: 30px;
	cursor: pointer;
	z-index: 20;
`;
