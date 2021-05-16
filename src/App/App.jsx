import React,{useState} from 'react'
import Header from '../Header/Header'
import ItemList from '../ItemList/ItemList'
import Form from '../Form/Form'
import Tag from '../Tag/Tag'
import {GlobalStyle} from './App_styled'

// cloneの練習です
// ----- nanoidをimportしkeyとして使う
const {nanoid} = require('nanoid')

const App = () => {
  // const[変数, 変数を更新する関数] = useState(初期値)
  const [todos, setTodos] = useState([]) // ItemList
  const [inputTitle, setInputTitle] = useState("") // Title
  const [inputText, setInputText] = useState("") // Content
  const [category, setCategory] = useState("work") // Category

  // ----- [add] : input値をItemに追加する
  const addTodo = () => {
    // -----必要事項チェックを実行
    if (inputTitle === "" || inputText === "") {
      window.alert('必要事項を入力してください');
      return;
    }

    // ----- setTodosを実行
    setTodos([
      ...todos,
      {
        id: nanoid(),
        title: inputTitle,
        content: inputText,
        category: category,
        time: postTime(),
        isDone: false,
      }
    ]);
    // フォームの中をクリアする
    setInputTitle('');
    setInputText('');
    setCategory("work"); // 初期値をselectedにしたがうまくいかなかった
    
    // <疑問>ここでconsole.log()したら入力後のTodosを取得できると思ったが、setTodoされる前の配列を取得してしまう。
    console.log(todos);
  }
  
  // ----- [delete] : Itemを一つ削除する
  // todoのidを引数で参照する
  // Item.jsxのonClickで実引数todo.idを取る必要がある
  // const deleteTodo = (id) => {
    //   const newTodos = todos.filter(todo => todo.id !== id)
    //   setTodos(newTodos);
    // }
    
    // ================↑↑↑↑=====================
    // slice()で記述するパターン
    // slice(配列の開始位置, 配列の終了位置);
    // todosのindexを取得する必要がある
    // <疑問>indexは配列に自動で付与されるものだからItem.jsxのItemの引数にindexを取る必要がないと思ったが、errorとなった。
    // <疑問2>todosは配列でtodos.splice()でいいと思ったが、[...todo]で配列化しないとダメだった。
    const deleteTodo = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }
    // ==============================================
    
    // ----- [changeTodo] : 選択したItemの情報をset~~に渡す
    // App.jsx 37~40を参考に、Formに戻す処理をしたかった
    const changeTodo = (index) => {
      setInputTitle(todos[index].title);
      setInputText(todos[index].content);
      setCategory(todos[index].category);
    }

  // ----- [toggle] : purgeのためisDoneを切り替える
  // map()でclickしたtodoを探し、isDoneを!isDoneにする
  const toggleIsDone = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id !== id) {
        return todo;
      }
      todo.isDone = !todo.isDone;
      return todo;
    })
    setTodos(newTodos);
  }

  // ----- [purge] : 選択したItemを一括削除する
  const purge = () => {
    if (!window.confirm('チェックしたToDoを削除しますか？')) {
      return;
    }
    const newTodos = todos.filter(todo => !todo.isDone)
    setTodos(newTodos);
  }

  // ----- [postTime] : 投稿時刻を取得する
  // 文字列として桁数を指定、足りない場合は'0'とする
  // Monthは0~11,Dayは曜日であることに注意
  const postTime = () => {
    const now = new Date();
    const y = String(now.getFullYear()).padStart(4, '0');
    const m = String(now.getMonth()+1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    const h = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');
    return (`${y}/${m}/${d}  ${h}:${min}`);
  }

  return (
    <>
      <GlobalStyle />
      <section>
      <Header />
      <Form
        addTodo={addTodo} purge={purge}
        inputTitle={inputTitle} setInputTitle={setInputTitle}
        inputText={inputText} setInputText={setInputText}
        category={category}  setCategory={setCategory}
      />
        <Tag
          todos={todos}
        />
      </section>
      <section>
        <ItemList
          todos={todos}
          toggleIsDone={toggleIsDone}
          deleteTodo={deleteTodo}
          changeTodo={changeTodo}
        />
      </section>
    </>
  );
}

export default App;