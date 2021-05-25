import React,{useState, createContext} from 'react'
import Header from '../Header/Header'
import ItemList from '../ItemList/ItemList'
import DataBase from '../DataBase/DataBase'
import Form from '../Form/Form'
import Tag from '../Tag/Tag'
import {GlobalStyle} from './App_styled'

// ----- useContextにデータを渡す
export const Context = createContext();

// ----- nanoidをimportしkeyとして使う
const {nanoid} = require('nanoid')

const App = () => {
  // const[変数, 変数を更新する関数] = useState(初期値)
  const [todos, setTodos] = useState([
    {
        id: '111112',
        title: 'サンプル1',
        content: '仕事じゃないんだよ',
        category: 'work',
        time: '2021/05/19',
        isDone: false,
      },
    {
        id: '111111',
        title: 'サンプル2',
        content: '仕事だよ',
        category: 'work',
        time: '2021/05/19',
        isDone: false,
      },
    {
        id: '111113',
        title: 'サンプル3',
        content: 'マフラー編む',
        category: 'shopping',
        time: '2021/05/19',
        isDone: false,
    },
    ]) // ItemList
  const [inputTitle, setInputTitle] = useState("") // Title
  const [inputText, setInputText] = useState("") // Content
  const [category, setCategory] = useState("work") // Category
  const [sortCategory, setSortCategory] = useState("work") // Sort
  const [keepId, setKeepId] = useState("") // edit

  // ----- [add] : input値をItemに追加する
  const addTodo = () => {
    // -----必要事項チェックを実行
    if (inputTitle === "" || inputText === "") {
      window.alert('必要事項を入力してください');
      return;
    }

    // ----- setTodosを実行
    setTodos([
      {
        id: nanoid(),
        title: inputTitle,
        content: inputText,
        category: category,
        time: postTime(),
        isDone: false,
      },
      ...todos
    ]);

    // setTodosで追加した中身をconsoleで確認したい
    const newTodos = {
      id: nanoid(),
      title: inputTitle,
      content: inputText,
      category: category,
      time: postTime(),
      isDone: false,
    }
    console.log(newTodos)

    // フォームの中をクリアする
    setInputTitle('');
    setInputText('');
    setSortCategory('work');
    setKeepId('');
  }
  
  // ----- [delete] : Itemを一つ削除する
  // todoのidを引数で参照する
  // Item.jsxのonClickで実引数todo.idを取る必要がある
  const deleteTodo = (id) => {
      const newTodos = todos.filter(todo => todo.id !== id)
      setTodos(newTodos);
    }
    
    // ================↑↑↑↑=====================
    // slice()で記述するパターン
    // slice(配列の開始位置, 配列の終了位置);
    // const deleteTodo = (index) => {
    //   const newTodos = [...todos];
    //   newTodos.splice(index, 1);
    //   setTodos(newTodos);
    // }
    // ==============================================

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
    console.log(todos)
    if (!window.confirm('チェックしたToDoを削除しますか？')) {
      return;
    }
    const newTodos = todos.filter(todo => !todo.isDone)
    if (newTodos.length === todos.length) {
      alert('チェックされたアイテムがありません。')
    }
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

  // ----- [sort] : カテゴリBtn押すと指定CategoryのItemのみ表示する
  const sortTodos = todos.filter( todo =>
    todo.category === sortCategory
  )

  console.log(sortTodos)
  // if (sortTodos === )

  /* 編集機能 */
  const edit = (id) => {
    const getTodo = todos.find(todo => {
      // trueのものだけを取る
      return (
        todo.id === id
        )
      })
      console.log(getTodo)
      setInputTitle(getTodo.title)
      setInputText(getTodo.content)
      setCategory(getTodo.category)
      setKeepId(getTodo.id)
    }
    
    /* update */
    const update = () => {
      if (!keepId) { // keepIdが残っている
        addTodo();
        return;
      }
      
      const newTodos = todos.map(todo => {
        if (todo.id !== keepId) {
          return todo
        } else {

          todo.title = inputTitle;
          todo.content = inputText;
          todo.category = category;

          // -----setTodosで変更箇所をobjectで渡してもできる
          // {
            //   ...todo,
            //   title: inputTitle,
            //   content: inputText,
            //   category: category,
            // }
            
            return todo
        }
      })
    setTodos(newTodos)

    setInputTitle('')
    setInputText('')
    setCategory('work')
    setKeepId('')
    console.log(newTodos)
  }

  return (
    <Context.Provider value={{
      todos,
      inputTitle, setInputTitle, 
      inputText, setInputText,
      category, setCategory,
      sortTodos,
      sortCategory, setSortCategory,
      addTodo, edit, deleteTodo, purge, update,
      toggleIsDone,
    }}>
        
      <GlobalStyle />
      <Header />
      <Form />
      <Tag />
      <DataBase />
      <ItemList/>

    </Context.Provider>
  );

}

export default App;