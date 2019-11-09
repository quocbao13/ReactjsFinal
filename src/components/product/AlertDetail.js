import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import ProductDetail from './ProductDetail.js';

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <i variant="outlined" color="primary" onClick={handleClickOpen}>
      <i class="fas fa-eye"></i>
      </i>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
            <div>
                
                {<ProductDetail/>}
            </div>
        </DialogTitle>
        
        <DialogActions>
         
          <Button onClick={handleClose} color="primary" autoFocus>
            OK 
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


