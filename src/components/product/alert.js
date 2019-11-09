import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog() {
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
       <i className="fas fa-1x fa-shopping-cart"/>
      </i>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Cảm ơn bạn đã đặt hàng !"}</DialogTitle>
        
        <DialogActions>
         
          <Button onClick={handleClose} color="primary" autoFocus>
            OK 
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
