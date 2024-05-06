import { Stack, Alert, AlertTitle } from '@mui/material'

function PopUpAlert(alert) {
    return (
        <Stack spacing={2}>
            <Alert severity="warning">
                <AlertTitle>Warning</AlertTitle>
                {alert.msg}
            </Alert>
        </Stack>
    )
}

export default PopUpAlert;