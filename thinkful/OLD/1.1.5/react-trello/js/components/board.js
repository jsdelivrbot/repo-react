
// js/components/board.js
import React from 'react';
import List from './list';

export default class Board extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(event) {
        console.log('(board) A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    onAddInputChanged(event) {
        console.log("(board) onAddInputChanged");
        this.setState({value: event.target.value});
    }

    render() {
        const jv = this.props.lists.map((item, idx) => {
            return (
                <div key={item.id}>
                    <h3 className="each board">Board title: {item.title}</h3>
                    <List title={item.list.title} cards={item.list.cards} 
                        onAddInputChanged={this.onAddInputChanged}
                        onAddSubmit={this.handleSubmit}/>
                </div>
            )
        });
        return (
            <div key={this.props.id}>
                <h2>Board main title: {this.props.title}</h2>
                {jv}
            </div>
        );
    }
}