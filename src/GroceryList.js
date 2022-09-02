import { Component } from 'react';
import check from './done.jpg';

export class GroceryList extends Component {
    state = {
        userInput: "",
        groceryList: []
    }

        onChangeEvent(e) {
            // console.log(event.target.value);
            this.setState({userInput: e});
            // console.log(e);
}
        addItem(input) {

            if (input === '') {
                alert("Please enter an item")
            }
            else { 
            let listArray = this.state.groceryList;
            listArray.push(input);
            
            // console.log(listArray)

            this.setState({groceryList: listArray,
            userInput: ''})
        }
    }

    deleteItem() {
        let listArray = this.state.groceryList;
        listArray = [];
        this.setState({groceryList: listArray})
    }
        
        crossedWord(event) {
            const li = event.target;
            li.classList.toggle('crossed');
        }

        onFormSubmit(e) {
            e.preventDefault();
        }

        render() {
            return(
            <div> 
                <form onSubmit = {this.onFormSubmit}>
                <div className='container'>
                    <input type="text" 
                    placeholder="What do you want to buy today?" 
                    onChange={(e) => {this.onChangeEvent(e.target.value)}} 
                    value={this.state.userInput}/>
                </div>
                <div className='container'> 
                    <button onClick={() => this.addItem(this.state.userInput)} className="btn add" >ADD</button> 
                </div>
                <ul>
                    {this.state.groceryList.map((item, index) => (
                        <li onClick={this.crossedWord} key={index} >
                            <img src={check} width="30px" alt="done" />
                            {item}</li>
                    ))}
                </ul>
                <div className='container'>
                    <button  onClick = {() => this.deleteItem()} className="btn delete">DELETE</button>
                </div>
                
                </form>
            </div>
            )
        }
    }
