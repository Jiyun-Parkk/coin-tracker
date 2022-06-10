import styled from "styled-components";

export const Loader = styled.span`
	display: block;
	text-align: center;
	color: ${(props) => props.theme.textColor};
	font-size: 28px;
`;

export const Header = styled.header`
	position: relative;
	height: 60px;
	display: flex;
	justify-content: center;
	align-item: center;
	margin: 20px 0;
`;
export const Title = styled.h1`
	line-height: 60px;
	font-size: 28px;
	text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.3);
	font-weight: 600;
	color: ${(props) => props.theme.textColor};
`;
export const ModeButton = styled.button<{ isActive: boolean }>`
	position: absolute;
	top: 4px;
	right: 0px;
	border: none;
	color: ${(props) => (props.isActive ? "#000" : "#fff")};
	display: inline-block;
	background-color: ${(props) => (props.isActive ? "#FCF9C6" : "#354259")};
	border-radius: 100%;
	padding: 0;
	margin: 0;
	width: 50px;
	height: 50px;
	line-height: 50px;
	font-size: 30px;
	box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.3);
	cursor: pointer;
	z-index: 20;
`;
