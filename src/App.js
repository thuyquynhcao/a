import React, { Component } from 'react';
import ToDoListItem from "./ToDoListItem.js"
import './App.css';

class App extends Component {
    //hay su dung state de quan ly todoList(mang)
  render() {
    return (
      <div className="App">
      <form className = "App-form"
      //3.onSubmit={
          // 取得する　id la element cua title va description
          //su dung this.setState(), them data vao todoList
          //element は　クリアしてください
     // }
      >
      // them form nhap title and description
      //them 登録ボタン vao cung 
        <div>
        //4.todoList の要素数分のtodoListItem を呼び出す(su dung map)
        
          <ToDoListItem
          //2.
          title = "テスト"
          description = "実験です"
          //5.
          // onClick setState を使って　todoList から要素を削除する
          />
        </div>
      </div>
    );
  }
}

export default App;