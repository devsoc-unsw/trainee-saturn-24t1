import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function ProgressBar() {
    return (
        <>
            <p className='text-white font-bold my-2'>DUE TASKS COMPLETED:</p>
            <div className='flex items-center'>
                <Box sx={{ width: '100%' }}>
                    <LinearProgress variant="determinate" value={50}
                        sx={{
                            height: '1.8vw',
                            borderRadius: '20px',
                            borderStyle: 'solid',
                            borderColor: 'white'
                        }} />
                </Box>
                <p className='mx-2 text-white'>50%</p>
            </div>
        </>
    )
}

export default ProgressBar;