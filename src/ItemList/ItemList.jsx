import React, {useContext} from 'react'
import Context from '../App/App'
import Item from './Item/Item'
import {Wrapper} from './ItemList_styled'

const ItemList = ({sortTodos}) => {
  // const {sortTodos} = useContext(Context);

  return (
    <Wrapper>
    <h3>-Categorized-</h3>
    <ul>
      {sortTodos.map(todo => {
        return (
          <Item
            key={todo.id}
            todo={todo}
          />
          );
        })}
    </ul>
    </Wrapper>
  );
}

export default ItemList;

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




