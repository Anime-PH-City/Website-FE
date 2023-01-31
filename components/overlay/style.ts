import styled from "styled-components";

export const OverLayBackGround = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
    z-index: 99;
    .overlay__container {
      background-color: white;
      border-radius: 15px;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      z-index: 999;
      width: 580px;
    }
    .overlay__controls {
      display: flex;
      border-bottom: 1px solid #939e96;
      justify-content: space-between;
      align-items: center;
      padding: 3% 6%;
    }
    .overlay__close:after {
      display: inline-block;
      content: "\00d7";
    }
    .overlay__close {
      border: none;
      background-color: transparent;
      font-size: 36px;
      cursor: pointer;
    }
    .overlay__children {
      width: 90%;
      margin: auto;
      margin-top: 4%;
    }
`;
