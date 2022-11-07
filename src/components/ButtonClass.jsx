import React ,{Component}from 'react';
import './button.css';

class ButtonClass extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <button className='bg-slate-200 py-2 px-4 rounded'> Button CLass</button>
                <br />
                <button className='bg-slate-200 py-2 px-4 rounded'> {this.props.text}</button>
            </div>
        );
    }
}
 
export default ButtonClass;