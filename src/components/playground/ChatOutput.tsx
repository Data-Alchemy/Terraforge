import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import GitHubIcon from '@mui/icons-material/GitHub';
import MarkdownRenderer from './MarkdownRenderer'; // Import your MarkdownRenderer component

interface Response {
  question: string;
  answer: string;
  sources: string;
}

interface Props {
  responses: Response[];
  options: string[];
  handleSplitButtonClick: () => void;
  handleMenuItemClick: (option: string) => void;
}

const ChatOutput: React.FC<Props> = ({ responses, options, handleSplitButtonClick, handleMenuItemClick }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <Box sx={{ display: 'flex', flexGrow: 1 }}>
      <Box sx={{ flexGrow: 1, p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ width: '100%', maxWidth: 800 }}>
          <Typography variant="body1" gutterBottom>
            Answer
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2" gutterBottom>
            Related
          </Typography>
          <Box sx={{ my: 2 }}>
            <ul>
              <li>What are is our naming convention for azure function apps</li>
              <li>How many VM's do we have</li>
              <li>What is the code name for our Snowflake command center</li>
            </ul>
          </Box>
          <Divider sx={{ my: 2 }} />
          {responses.map((response, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="body1" gutterBottom>
                <strong>Question:</strong>
                <MarkdownRenderer content={response.question} />
              </Typography>
              <Typography variant="body2" gutterBottom>
                <strong>Answer:</strong>
                <MarkdownRenderer content={response.answer} />
              </Typography>
              <Typography variant="caption" display="block" gutterBottom>
                <strong>Sources:</strong> {response.sources}
              </Typography>
              <Divider sx={{ my: 2 }} />
              {index === responses.length - 1 && (
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button variant="outlined" startIcon={<ThumbUpIcon />}>
                    Like
                  </Button>
                  <Button variant="outlined" startIcon={<ThumbDownIcon />}>
                    Dislike
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<GitHubIcon />}
                    onClick={handleMenuOpen}
                  >
                    Options
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                  >
                    {options.map((option) => (
                      <MenuItem
                        key={option}
                        onClick={() => handleMenuItemClick(option)}
                      >
                        {option}
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ChatOutput;