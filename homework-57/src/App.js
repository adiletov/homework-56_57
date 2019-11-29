import React, {Component} from 'react';
import './App.css';
import AddTaskForm from "./Components/Item/item";
import * as nanoid from "nanoid";
import InputFields from "./Components/InputFields/InputFields";

class App extends Component {
    state = {
        NameInput: '',
        NumberInput : 0,
        purchase: [
            {name: 'Bottle of Water', price: 25, id: nanoid()},
            {name: 'Milk', price: 30, id: nanoid()},
            {name: 'Bread', price: 35, id: nanoid()},
            {name: 'Dinner of cafe', price: 40, id: nanoid()},
        ],
        totalSpent : 0,
    };
    itemName = (event) => {
            this.setState({NameInput: event.target.value})
    };
    itemNumber =(event)=>{
            this.setState({NumberInput: event.target.value});
    };

    addPurchase = () => {
        const purchase = [...this.state.purchase];
        const newTask = {
            name: this.state.NameInput,
            price: Number(this.state.NumberInput),
            id: nanoid(),
        };
        purchase.push(newTask);
        this.setState({purchase});
    };
    removeItem = (index)=>{
        const purchase = [...this.state.purchase];
         purchase.splice(index,1);
          this.setState({purchase : purchase})
    };
    totalSpent=()=>{
        const purchase = [...this.state.purchase];
        if (purchase.length === 0){
            return this.state.totalSpent;
        }else{
            Array.prototype.showTime = function() {
                return this.map(item => item.price);
            };

            const priceSome = purchase.showTime();

            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            let totalSpent = priceSome.reduce(reducer);
            if (totalSpent === 0){

                return this.state.totalSpent;
            }else{
                return totalSpent;
            }
        }

    };
    add =() =>{
        if (this.state.NumberInput === '' || this.state.NameInput === ''){
           return null;
        }else{
            return  this.addPurchase();
        }
    };

    render() {
        return (
            <div className="App">
                <AddTaskForm
                    onChange={event => {
                        this.itemName(event)
                    }}
                    onChangeNumber={event => {
                        this.itemNumber(event)
                    }}
                    onClick={this.add}
                />
                {this.state.purchase.map((purchase, index) =>
                    <InputFields
                        key={purchase.id}
                        txt={purchase.name}
                        id={purchase.id}
                        price={purchase.price}
                        click={()=>this.removeItem(index)}
                    />)}
                    <div><p>Total spent:</p>{this.totalSpent()}</div>
            </div>
        )
    }
}


export default App;
