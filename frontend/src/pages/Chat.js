import React from 'react'
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from '../components/ChatFeed'
import './chat.css'

const Chat = () => {
  return (
    <div>
      <ChatEngine
      height="100vh"
      projectID="d5fa8aff-8332-4a13-82de-7b0fa9b67d4c"
      userName="ParamT"
      userSecret="Asdf123#"
      renderChatFeed={(props) => <ChatFeed {...props} />}
      />
    </div>
  )
}

export default Chat
