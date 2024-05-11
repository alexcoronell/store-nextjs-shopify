'use client';

import { useChat } from 'ai/react';

export const Chat = (props: {agent: string}) => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: 'api/chat',
    initialMessages: [
        {
            id: '1',
            role: 'system',
            content: props.agent
        }
    ]
  });

  return (
    <>
      {messages
      .map(message => (
        <div key={message.id}>
          {message.role === 'user' ? 'User: ' : 'AI: '}
          {message.content}
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          name="prompt"
          value={input}
          onChange={handleInputChange}
          id="input"
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}