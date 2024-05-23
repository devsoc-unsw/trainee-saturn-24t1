import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

const ModeSwitch = styled(Switch)(({ isDarkMode }) => ({
  '& .MuiSwitch-switchBase': {
    '&.Mui-checked': {
      color: '#FBFBFB',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 25 25"><path fill="${encodeURIComponent(
          '#302E28',
        )}" d="M9.37 5.51c-.18.64-.27 1.31-.27 1.99 0 4.08 3.32 7.4 7.4 7.4.68 0 1.35-.09 1.99-.27C17.45 17.19 14.93 19 12 19c-3.86 0-7-3.14-7-7 0-2.93 1.81-5.45 4.37-6.49M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        backgroundColor: 'transparent',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    backgroundColor: isDarkMode ? '#FBFBFB' : '#302E28',
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 25 25"><path fill="${encodeURIComponent(
        '#FBFBFB',
      )}" d="M12 9c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1m0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1M5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    backgroundColor: 'transparent'
  },
}));

const ModeToggleButton = ({ isDarkMode, handleModeChange }) => {
  const handleClick = () => {
    handleModeChange(!isDarkMode);
  };

  return (
    <div className={
      isDarkMode ? 'border-2 border-[#FBFBFB] rounded-full inline-block px-3 py-1'
        : 'border-2 border-[#302E28] rounded-full inline-block px-3 py-1'
    }>
      <ModeSwitch
        isDarkMode={isDarkMode}
        disableRipple
        checked={isDarkMode}
        onChange={handleClick}
        inputProps={{ 'aria-label': 'controlled' }}
        sx={{ transform: "scale(1.8)" }}
      />
    </div>
  );
};

export default ModeToggleButton;
