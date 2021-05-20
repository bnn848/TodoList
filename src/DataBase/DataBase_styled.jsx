import styled from 'styled-components'

export const Wrapper = styled.div`
  list-style: none;
  
  h3 {
    font-style: italic;
  }

  ul {
  width: 70vw;
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