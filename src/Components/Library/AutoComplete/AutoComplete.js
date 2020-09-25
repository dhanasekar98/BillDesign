import React from 'react'


export default class AutoComplete extends React.Component{
    constructor(props){
        super(props)
        this.state={
            suggestion:[],
            text:""
        }
    }

    onTextchange=(e)=>{
        const {items}=this.props
        const value=e.target.value
        let suggestion=[]
        if(value.length>2){
            const regex = new RegExp(`^${value}`,'i')
            suggestion=items.sort().filter(v=>regex.test(v))
        }
        this.setState(()=>({ suggestion,text:value }))
    }
    suggestionselected(value){
        this.setState(()=>({
            text:value,
            suggestion:[]
        }))
    }

    rendersuggestion(){
        const {suggestion}=this.state
        if(suggestion.length===0){
            return null
        }
        return(
                <div>
                    {suggestion.map((items)=><ol  onClick={()=>this.suggestionselected(items)}>{items}</ol>)}
                </div>

        )
    }




    render(){
        const {text}=this.state
        return(           
                <table>
                <th>
                    <div>
                        <label>{this.props.label}</label>
                            <input size="30" value={text} onChange={this.onTextchange} type="text" />
                            {this.rendersuggestion()}
                        </div>
                    </th>
                </table>

        )       
    }
}