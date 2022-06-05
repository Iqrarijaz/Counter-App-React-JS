import React, { Component } from 'react';

class Counter extends Component {
    state={
        count:0,
    };
    render() { 
        return (
            <div><span style= {{fontSize:15}}className='badge badge-primary m-2'> {this.formateCount()}</span>
             <button className='btn btn-secondary btn-sm'> Increment</button> </div>
        );
    }

    formateCount(){
        const {count}=this.state;
        return count==0? "Zero" :count;
    }
}
 
export default Counter;