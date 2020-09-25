import React from 'react'
import styled from 'styled-components'


const Inputs = styled.input`
background:transparent;
margin:5px 0 0 0;
font-size:25px;

`
const Label = styled.label`
position:absolute;
top:22px;
left:15px;
color:#999;
font-weight:600;`

const InputDiv = styled.div`
border-bottom:2px solid #0AF;
width:200px;
margin: 0px 10px 5px 5px;
position:relative`
export const Inputname = (props) => {
     
    const [values,onChange] = props;
    return (
        <InputDiv>
            <Inputs
                type="text"
                name="name"
                className="input"
                value={values}
                onChange={(event)=>onChange(event.target.value)}
            />
            <Label>Email</Label>
        </InputDiv>
    )
}