import * as React from 'react';

interface EmailTemplateProps {
    username: string;
    email: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  username,
  email,
  message
}) => (
  <div>
    <h1>New message from {username}!</h1>
    <p>Email: {email}</p>
    <p>Message: {message}</p>
  </div>
);