import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
function ChatBots() {
  let publicPath = process.env.PUBLIC_URL;
  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
    const steps = [
      {
        id: '1',
        message: 'How can i help you?',
        trigger: '2',
      },
      {
        id: '2',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        message: 'What is your name?',
        trigger: '4',
      },
      {
        id: '4',
        user: true,
        trigger: '5',
      },
      {
        id: '5',
        message: 'Hi {previousValue}, nice to meet you!',
        end: true,
      },
    ];
    return (
        <div>
          <ThemeProvider theme={theme}>
            <ChatBot enableMobileAutoFocus={true} botAvatar={publicPath + "/logo192.png"} floating={true} headerTitle="Cubedots EcoSystem" speechSynthesis={{ enable: true, lang: 'en' }} steps={steps} />
          </ThemeProvider>
        </div>
    );
}

export default ChatBots;