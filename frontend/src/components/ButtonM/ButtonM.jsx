import React from 'react'
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';


const MyButton = styled(Button)({
 
  
});


function ButtonM(props) {
  return (
    <div>
         <MyButton className="button">
       READ MORE
      </MyButton>
    </div>
  )
}

export default ButtonM
