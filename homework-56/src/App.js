import './App.css';
import React, {Component} from 'react';
import S from "./components/containerBlock/block.module.css";
import * as nanoid from "nanoid";
import Blocks from "./components/containerBlock/blocks";
import Tries from "./components/containerBlock/Tries";
const objectBlocks = () => {
    let arr = [];
    for (let i = 0; i < 36; i++){
        arr.push({id: nanoid(), boolean : false , classCard : S.blocks})
    }
    let randomNumber = Math.floor(Math.random()*36);
    arr[randomNumber].boolean = true;
    return arr;
};

class App extends Component {
    state ={
        totalTries: 0,
        blocks: objectBlocks(),
        isFinish: false,
    };

    clickCards= async(id) => {
        let totalTries = this.state.totalTries;
        let blocks = [...this.state.blocks];
        let isFinish = false;
        if ( blocks[id].boolean === true) {
            blocks[id].classCard = S.ship;
            isFinish = true;
        }else{
            blocks[id].classCard = S.white;
            totalTries +=1;
        }

        await this.setState({totalTries, blocks, isFinish})
    };
    reset = async ()=>{
       window.location.reload();
    };
    render() {
        return (
            <div className="App" >
                <div className="containerBlock" >
                    {this.state.blocks.map((block,index) => <Blocks
                            key={index}
                            class={S.blocks + ' ' + block.classCard}
                            id={block.id}
                            click={this.state.isFinish ? ()=>{} : () => this.clickCards(index)}/>
                        )}
                </div>

                <Tries
                    reset={this.reset}
                    tries={this.state.totalTries}
                />
            </div>
        );
    }
}

export default App;