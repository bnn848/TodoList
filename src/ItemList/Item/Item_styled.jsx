import styled from 'styled-components'

export const Li = styled.li`
  display: flex;
  height: 30px;
  width: 90%;
  align-items: center;
  list-style: none;

  span {
    margin: 0 10px;
  }

  #Btn {
    margin: 0 0 0 auto;
  }
  
  button {
    background-color: #e09200;
    width: 50px;
    height: 20px;
    margin-left: 10px;
    border: none;
    font-size: 12px;

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