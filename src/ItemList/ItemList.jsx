import React from 'react'
import Item from './Item/Item'
import {Wrapper} from './ItemList_styled'

const ItemList = ({todos, toggleIsDone, deleteTodo, changeTodo}) => {

  return (
    <Wrapper>
    <h3>-All Todos-</h3>
    <ul>
      {todos.map((todo, index) => {
        return (
          <Item
            index={index}
            key={todo.id}
            todo={todo}
            toggleIsDone={toggleIsDone}
            deleteTodo={deleteTodo}
            changeTodo={changeTodo}
          />
          );
        })}
    </ul>
    </Wrapper>
  );
}

export default ItemList;






// import React from 'react'
// import styled from 'styled-components';
// import Item from './Item'

// const ItemList = ({todos, toggleDone, del}) => {
//   return (
//     <Ul>
//       <h2>↓↓↓ Do Now ↓↓↓</h2>
//       {todos.map((todo) => {
//         return (
//           <Item key={todo.id} todo={todo} toggleDone={toggleDone} del={del} />
//         )
//       })}
      
//     </Ul>
//   )
// }

// export default ItemList;

// // -----Style
// const Ul = styled.ul`
//   list-style: none;
//   margin-left: 100px;
//   font-size: 20px;

//   & h2 {
//     font-size: 20px;
//   }

//   & span {
//     margin: 20px;
//   }

//   & button {
//     background-color: #e09200;
//     width: 60px;
//     height: 20px;
//     border: none;
//     font-size: 14px;
  
//     &:hover {
//       background-color: #984200;
//       color: #fff;
//       cursor: pointer;
//     }

//     &:active {
//       transform: translateY(3px);
//     }
//   }

// `;

// // // -----keyがindexではダメな理由がよく分かるサイト
// // // https://zenn.dev/luvmini511/articles/f7b22d93e9c182

// // // -----useStateが何かよく分かるサイト
// // // https://qiita.com/seira/items/f063e262b1d57d7e78b4

// // 
// /* 機能拡充
  
//   リスト名を入力したら新しいリストを追加
//   追加したリストにTodoを追加できるようにする
//   モーダル？ReactRooter?

//   {true or false で表示切り替え}
//   {条件式}

//   position: fixed;


//     やること
//       slice実装
//       もーだる実装
//  */



