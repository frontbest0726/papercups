import React from 'react';
import {Box, Flex} from 'theme-ui';
import {colors, Button, Footer, TextArea} from '../common';

const ConversationFooter = ({
  onSendMessage,
}: {
  onSendMessage: (message: string) => void;
}) => {
  const [message, setMessage] = React.useState('');

  const handleMessageChange = (e: any) => setMessage(e.target.value);

  const handleSendMessage = () => {
    onSendMessage(message);
    setMessage('');
  };

  return (
    <Footer style={{padding: 0}}>
      <Box px={4} pt={0} pb={4} backgroundColor={colors.white}>
        <Box
          p={2}
          sx={{
            border: '1px solid #f5f5f5',
            borderRadius: 4,
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 8px',
          }}
        >
          <Box mb={2}>
            <TextArea
              className="TextArea--transparent"
              placeholder="Type your message here!"
              autoSize={{minRows: 1, maxRows: 4}}
              value={message}
              onChange={handleMessageChange}
            />
          </Box>
          <Flex sx={{justifyContent: 'flex-end'}}>
            <Button type="primary" onClick={handleSendMessage}>
              Send
            </Button>
          </Flex>
        </Box>
      </Box>
    </Footer>
  );
};

export default ConversationFooter;
