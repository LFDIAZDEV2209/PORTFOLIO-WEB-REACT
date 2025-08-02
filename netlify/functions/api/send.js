const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event, context) => {
  // Habilitar CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Manejar preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const dataForm = JSON.parse(event.body);
    
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["diazlf199@gmail.com"],
      subject: "New message from your website",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${dataForm.username}</p>
        <p><strong>Email:</strong> ${dataForm.email}</p>
        <p><strong>Message:</strong></p>
        <p>${dataForm.message}</p>
      `,
      text: `New message from ${dataForm.username} (${dataForm.email}): ${dataForm.message}`
    });

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ data })
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to send email' })
    };
  }
}; 