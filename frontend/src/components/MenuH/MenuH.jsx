import React,{useState} from 'react'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
//import MoreVertIcon from '@material-ui/icons/MoreVert';
import {makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  cont: {
    position: 'absolute',
    top: '30px',
    right:'30px',
   
  },
 iconB: {
   color: 'white',
   backgroundColor: 'black',
   width: '100px',
   height: '100px',
   stroke: 'white',
   fill: 'white',
   '&:hover': {
    stroke: 'black',
    color: 'black',
    backgroundColor: 'white',
    border: "2px solid black"
   },
   '@media (max-width: 1100px)': {
    width: '90px',
    height: '90px',
    border: "2px solid black",
    right: '0',
    top: '0',
  },
  '@media (max-width: 750px)' : {
    width: '80px',
    height: '80px',
    right: '40px',
    top: '40px',
  },
  '@media (max-width: 430px)' : {
    width: '70px',
    height: '70px',
    right: '0',
    top: '0px',
    bottom: '50px'
  }
 },
 icon:{
   fontSize: '65px',
    '@media (max-width: 1100px)' : {
      fontSize: 55,
    },
    '@media (max-width: 750px)' : {
      fontSize: 45,
    },
    '@media (max-width: 430px)' : {
      fontSize: 35,
    }
 }
});

const options = [
  'Home',
  "It's me",
  "Cats",
];

function MenuH() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.cont}>
      <IconButton className={ classes.iconB }
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon className={classes.icon} />
      </IconButton>

      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: "150px",
            width: '150px',
            color: 'red',
            backgroundColor: 'blue'
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}


export default MenuH
