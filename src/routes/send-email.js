// in src/routes/send-email.js
export async function post(request) {
    const data = JSON.parse(request.body);
    const { name, email, message } = data;
  
    // Set the recipient email address (your email address)
    const to = 'amdacodes@gmail.com';
  
    // Set the subject line and email message
    const subject = 'New message from your website';
    const text = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
  
    // Send the email using a third-party service like SendGrid
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: to }] }],
        from: { email: 'noreply@example.com' },
        subject,
        content: [{ type: 'text/plain', value: text }]
      })
    });
  
    if (response.ok) {
      return { status: 200 };
    } else {
      return { status: 500, body: 'An error occurred while sending the email.' };
    }
  }
  