import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  h3 {
    width: 300px;
    margin: 50px 0 0;
    font-style: italic;
  }

  dt {
    width: 300px;
    height: 30px;
    line-height:30px;
    color: #e09200;
    border-bottom: 1px solid #e09200;
    cursor: pointer;
  }

  dd {
    text-align: left;
    /* display: none; */
  }
`;
