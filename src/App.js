import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Note from './components/Note';

class App extends Component {
    
    constructor(props){
        super(props);
        this.state = {
          noteText : '',
          notes : [],
        };
        this.currentIndex = 0;
    }

    handleKeyPress = (event) => {
      if(event.key == 'Enter'){
        this.addNote();
      }
    }
    addNote(){
      if(this.state.noteText === '') {return}

      let notesArr = this.state.notes;
      if(this.currentIndex >0) {
        this.state.notes[this.currentIndex] = this.state.noteText;
        this.currentIndex = 0;
      }
      else {
        notesArr.push(this.state.noteText);
      }
      this.setState({ noteText: '' });
      this.textInput.focus();
    }

    updateNoteText(noteText, key){
      this.setState({ noteText: noteText.target.value });
    }

    deleteNote(index){
      let noteArr = this.state.notes;
      noteArr.splice(index,1);
      this.setState({ notes: noteArr });
    }

    selectNote(key){
      this.currentIndex = key;
      this.state.noteText = this.state.notes[key];
      document.getElementById('txtTodo').value = this.state.noteText;
      this.textInput.focus();
    }

    render() {

      let notes = this.state.notes.map((value, key) => {
        return <Note key={key} text={value}
                selectMethod={ () => this.selectNote(key) }
                deleteMethod={ () => this.deleteNote(key) } />
      });

      return(
          <div className="container">
          <div className="header">To Do Application</div>
          {notes}
          <div className="btn" onClick={this.addNote.bind(this)} >+</div>
          <input type="text" id="txtTodo"
              ref = {((input) => {this.textInput = input})}
              className = "textInput"
              value = {this.state.noteText}
              onChange = {noteText => this.updateNoteText(noteText)}
              onKeyPress={this.handleKeyPress.bind(this)} 
              />
        </div>
    );
  }

}

export default App;
