import React from "react";
import { Inputname } from '../Input/Input'
import styled from 'styled-components'

const InputDiv = styled.div`
display:flex;
flex-wrap:wrap;
`

export const ContentBox = () => {
    const [name, SetValue] = React.useState('');
  return (
    <div className="div">
      <h1>Network</h1>
          <InputDiv>
              <Inputname value={name} onChange={(value)=>SetValue(value)}/>
           
              
      </InputDiv>
    </div>
  );
};
