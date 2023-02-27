import styled from "@emotion/styled";


export const OverLayBackGround = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 90;
`;


export const OverLayContainer = styled.div`
    background-color: white;
    border-radius: 15px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    z-index: 101;
    width: 45vw;
    height: 58vh;
    cursor: pointer;
`
export const OverLayControls = styled.div`
    display: flex;
    border-bottom: 1px solid #939e96;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: inherit;
    padding: 1% 2%;
    z-index: 150;
    background-color: #fff;
    border-radius: 15px 15px 0 0;
`
export const Close = styled.div`
    display: inline-block;
    background: red;
    width: 100%;
    content: "\00d7";
`

export const OverLayChildren = styled.div`
    width: 90%;
    margin: auto;
    margin-top: 90px;
    z-index: 110;
`
// .overlay__close:after {
//   display: inline-block;
//   content: "\00d7";
//   }