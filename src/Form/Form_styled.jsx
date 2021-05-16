import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  
  & input {
    color: #fff;
    background-color: #000;
    width: 200px;
    height: 28px;
    margin-bottom: 10px;
    padding-left: 10px;
    border: none;
    border-bottom: 1px solid #e09200;
    outline: none;
  }

  & select {
    color: #8a8a8a;
    background-color: #000;
    border-color: #e09200;
    width: 100px;
    height: 30px;
    margin: 20px;
    padding-left: 10px;
    outline: none;
  }
  
  #btn {
    width: 300px;
    display: flex;
    justify-content: space-around;
  }

  button {
    background-color: #e09200;
    width: 100px;
    height: 30px;
    margin: 10px;
    border: none;
    font-size: 14px;

    &:hover {
      background-color: #984200;
      color: #fff;
      cursor: pointer;
    }

    &:active {
      transform: translateY(3px);
    }
  }
`;