import  React, {useState} from 'react';

import { Backdrop } from '@material-ui/core';
import { CircularProgress } from '@material-ui/core';
// import CircularProgress from '@mui/material/CircularProgress';
// import Button from '@mui/material/Button';

export default function SimpleBackdrop({}) {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
//   const handleToggle = () => {
//     setOpen(!open);
//   };

  return (
    <div>
      {/* <Button onClick={handleToggle}>Show backdrop</Button> */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
