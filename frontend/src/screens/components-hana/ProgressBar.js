import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const ProgressBar = ({ tabs, currentTab, isDarkMode }) => {
  const theme = createTheme({
    palette: {
      progress_bar: {
        main: '#5AC886',
        bgcolor: '#877070',
        light_bgcolor: '#F2D2D2'
      },
    },
  });

  const calculateRatio = () => {
    const all_tabs = [...tabs];
    const selectedTab = all_tabs.find((tabs) => tabs.id === currentTab);
    if (currentTab === "") {
      return 100;
    }

    const task_list = selectedTab.tasks;
    if (task_list.length === 0) {
      return 100;
    }
    let completed = 0;
    for (let i = 0; i < task_list.length; i++) {
      if (task_list[i].checked === true) {
        completed++;
      }
    }
    const ratio = (completed / task_list.length) * 100;

    return Math.round(ratio);
  }

  return (
    <>
      <p className={
        isDarkMode === true
          ? 'text-[#FBFBFB] font-semibold my-2'
          : 'text-[#3C3C3C] font-semibold my-2'
      }>DUE TASKS COMPLETED:</p>
      <ThemeProvider theme={theme}>
        <div className='flex items-center'>
          <Box sx={{
            width: '100%'
          }}>
            <LinearProgress variant="determinate"
              value={calculateRatio()}
              color="progress_bar"
              sx={isDarkMode === true
                ? {
                  bgcolor: 'progress_bar.bgcolor',
                  height: '2.1vw',
                  borderRadius: '20px',
                  border: 2.5,
                  borderColor: '#FBFBFB'
                }
                : {
                  bgcolor: 'progress_bar.light_bgcolor',
                  height: '2.1vw',
                  borderRadius: '20px',
                  border: 2.5,
                  borderColor: '#3C3C3C'
                }
              } />
          </Box>
          <p className={
            isDarkMode === true
              ? 'mx-2 text-[#FBFBFB]'
              : 'mx-2 text-[#3C3C3C]'}>
            {calculateRatio()}%
          </p>
        </div>
      </ThemeProvider>

    </>
  )
}

export default ProgressBar;