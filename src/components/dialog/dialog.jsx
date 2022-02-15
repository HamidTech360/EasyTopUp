import React from 'react';
import { CircularProgress } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


export default function AlertDialog(props) {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

  return (
    <div>
      <Dialog
        open={props.appear}
        onClose={()=>props.handleClose()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogContent>
          <DialogContentText id="alert-dialog-description" style={{color:`${props.type}`}}>
              <b>{props.dialogMessage}</b>
          </DialogContentText>
          <div className="text-center">
            <CircularProgress/>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
