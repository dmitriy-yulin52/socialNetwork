import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../Redux/store/reduxStore";
import {setErrorAppAC} from "../../Redux/App/app-reducer";


function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}



export function ErrorSnackBar() {
    // const [open, setOpen] = React.useState(true);

    const error = useSelector<AppStateType, string | null>((state)=>state.app.error)
    const dispatch = useDispatch()

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setErrorAppAC(null))
    };

    const isOpen = error !== null
    return (
        <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
                {error}
            </Alert>
        </Snackbar>
    );
}