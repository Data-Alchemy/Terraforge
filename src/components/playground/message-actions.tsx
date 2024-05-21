import * as React from 'react';
import { Box, Button } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import GitHubIcon from '@mui/icons-material/GitHub';

interface MessageActionsProps {
  options: string[];
  onOptionClick: (option: string) => void;
}

const MessageActions: React.FC<MessageActionsProps> = ({ options, onOptionClick }) => {
  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <Button variant="outlined" startIcon={<ThumbUpIcon />}>
        Like
      </Button>
      <Button variant="outlined" startIcon={<ThumbDownIcon />}>
        Dislike
      </Button>
      <Button variant="outlined" startIcon={<GitHubIcon />}>
        Options
      </Button>
    </Box>
  );
};

export default MessageActions;
