import styled, {css} from "styled-components";

const dragActive = css`
  border-style: dashed;
  border-color: #78e5d5;
`;


const dragReject = css`
  border-style: dashed;
  border-color: #e57878;
`;

export const DropContainer = styled.div.attrs({
  className: "dropzone",
})`
  border:1px;
  border-radius:3px;
  cursor:pointer;
  

  transition: heigth 0.2s ease;

  ${props => props.isDragActive && dragActive};
  ${props => props.isDragReject && dragReject};
`;
const messageColors = {
  default:'#c9c9c9',
  error:'#e57878',
  success:'#78e5d5',
}
export const UploadMessage = styled.p`
  border-style: dashed;
  border-radius:3px;
  display:flex;
  color: ${ props => messageColors[props.type || 'default']}; 
  justify-content: center;
  align-items: center;
  padding: 15px 0; 
`; 