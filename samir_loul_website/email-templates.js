// Email templates for the contact form

// Template for the email sent to Samir when someone contacts him
function getContactNotificationTemplate(formData) {
    return {
        subject: `New Contact Form Message from ${formData.name}`,
        html: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Message</title>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #f5f5f5;
                }
                .email-container {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }
                .header {
                    background: rgba(255,255,255,0.1);
                    padding: 30px;
                    text-align: center;
                    color: white;
                }
                .header h1 {
                    margin: 0;
                    font-size: 24px;
                    font-weight: 300;
                }
                .content {
                    background: white;
                    padding: 30px;
                }
                .message-info {
                    background: #f8f9fa;
                    border-left: 4px solid #007bff;
                    padding: 20px;
                    margin: 20px 0;
                    border-radius: 5px;
                }
                .info-row {
                    display: flex;
                    margin-bottom: 10px;
                    align-items: center;
                }
                .info-label {
                    font-weight: bold;
                    color: #007bff;
                    min-width: 80px;
                    margin-right: 15px;
                }
                .message-content {
                    background: #fff;
                    border: 1px solid #e9ecef;
                    border-radius: 8px;
                    padding: 20px;
                    margin: 20px 0;
                    font-style: italic;
                    line-height: 1.8;
                }
                .footer {
                    text-align: center;
                    padding: 20px;
                    color: #6c757d;
                    font-size: 14px;
                }
                .reply-button {
                    display: inline-block;
                    background: linear-gradient(45deg, #007bff, #0056b3);
                    color: white;
                    padding: 12px 25px;
                    text-decoration: none;
                    border-radius: 25px;
                    margin: 20px 0;
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            <div class="email-container">
                <div class="header">
                    <h1>📧 New Contact Form Message</h1>
                    <p>Someone has sent you a message through your portfolio website</p>
                </div>
                
                <div class="content">
                    <div class="message-info">
                        <div class="info-row">
                            <span class="info-label">👤 Name:</span>
                            <span>${formData.name}</span>
                        </div>
                        <div class="info-row">
                            <span class="info-label">📧 Email:</span>
                            <span>${formData.email}</span>
                        </div>
                        ${formData.subject ? `
                        <div class="info-row">
                            <span class="info-label">📝 Subject:</span>
                            <span>${formData.subject}</span>
                        </div>
                        ` : ''}
                        <div class="info-row">
                            <span class="info-label">🕒 Time:</span>
                            <span>${new Date().toLocaleString('en-US', { 
                                weekday: 'long', 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                            })}</span>
                        </div>
                    </div>
                    
                    <h3>💬 Message:</h3>
                    <div class="message-content">
                        ${formData.message.replace(/\n/g, '<br>')}
                    </div>
                    
                    <div style="text-align: center;">
                        <a href="mailto:${formData.email}?subject=Re: ${formData.subject || 'Your message'}" class="reply-button">
                            Reply to ${formData.name}
                        </a>
                    </div>
                </div>
                
                <div class="footer">
                    <p>This message was sent through the contact form on your portfolio website</p>
                    <p><strong>Mohamed Samir Loul</strong> | Portfolio Website</p>
                </div>
            </div>
        </body>
        </html>
        `,
        text: `
New Contact Form Message

From: ${formData.name} (${formData.email})
${formData.subject ? `Subject: ${formData.subject}` : ''}
Time: ${new Date().toLocaleString()}

Message:
${formData.message}

Reply to: ${formData.email}
        `
    };
}

// Template for the confirmation email sent to the visitor
function getConfirmationTemplate(formData) {
    return {
        subject: 'Thank you for contacting Mohamed Samir Loul',
        html: `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Message Confirmation</title>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    background-color: #f5f5f5;
                }
                .email-container {
                    background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }
                .header {
                    background: rgba(255,255,255,0.1);
                    padding: 40px 30px;
                    text-align: center;
                    color: white;
                }
                .header h1 {
                    margin: 0 0 10px 0;
                    font-size: 28px;
                    font-weight: 300;
                }
                .header p {
                    margin: 0;
                    font-size: 16px;
                    opacity: 0.9;
                }
                .content {
                    background: white;
                    padding: 40px 30px;
                }
                .greeting {
                    font-size: 18px;
                    color: #28a745;
                    margin-bottom: 20px;
                }
                .message-summary {
                    background: #f8f9fa;
                    border-left: 4px solid #28a745;
                    padding: 20px;
                    margin: 25px 0;
                    border-radius: 5px;
                }
                .response-info {
                    background: linear-gradient(45deg, #e3f2fd, #f3e5f5);
                    padding: 25px;
                    border-radius: 10px;
                    margin: 25px 0;
                    text-align: center;
                }
                .social-links {
                    text-align: center;
                    margin: 30px 0;
                }
                .social-links a {
                    display: inline-block;
                    margin: 0 10px;
                    padding: 10px 15px;
                    background: #007bff;
                    color: white;
                    text-decoration: none;
                    border-radius: 20px;
                    font-size: 14px;
                }
                .footer {
                    background: #f8f9fa;
                    text-align: center;
                    padding: 25px;
                    color: #6c757d;
                    font-size: 14px;
                }
                .checkmark {
                    font-size: 48px;
                    color: #28a745;
                    margin-bottom: 20px;
                }
            </style>
        </head>
        <body>
            <div class="email-container">
                <div class="header">
                    <div class="checkmark">✅</div>
                    <h1>Message Received!</h1>
                    <p>Thank you for reaching out to me</p>
                </div>
                
                <div class="content">
                    <div class="greeting">
                        Hello ${formData.name}! 👋
                    </div>
                    
                    <p>Thank you for taking the time to contact me through my portfolio website. I really appreciate your interest and I'm excited to connect with you!</p>
                    
                    <div class="message-summary">
                        <h3>📋 Your Message Summary:</h3>
                        <p><strong>Name:</strong> ${formData.name}</p>
                        <p><strong>Email:</strong> ${formData.email}</p>
                        ${formData.subject ? `<p><strong>Subject:</strong> ${formData.subject}</p>` : ''}
                        <p><strong>Sent:</strong> ${new Date().toLocaleString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                        })}</p>
                    </div>
                    
                    <div class="response-info">
                        <h3>⏰ What happens next?</h3>
                        <p>I typically respond to messages within <strong>24 hours</strong>. I'll review your message carefully and get back to you as soon as possible.</p>
                        <p>In the meantime, feel free to explore my portfolio and connect with me on social media!</p>
                    </div>
                    
                    <div class="social-links">
                        <h3>🌐 Connect with me:</h3>
                        <a href="https://x.com/samirloul">Twitter</a>
                        <a href="https://www.instagram.com/samirloul/">Instagram</a>
                        <a href="https://www.linkedin.com/in/samirloul">LinkedIn</a>
                    </div>
                    
                    <p>Thank you again for reaching out. I look forward to our conversation!</p>
                    
                    <p>Best regards,<br>
                    <strong>Mohamed Samir Loul</strong><br>
                    Software Development Student<br>
                    📍 Netherlands</p>
                </div>
                
                <div class="footer">
                    <p>This is an automated confirmation email from Mohamed Samir Loul's portfolio website</p>
                    <p>If you didn't send this message, please ignore this email</p>
                </div>
            </div>
        </body>
        </html>
        `,
        text: `
Hello ${formData.name}!

Thank you for contacting me through my portfolio website. I really appreciate your interest and I'm excited to connect with you!

Your Message Summary:
- Name: ${formData.name}
- Email: ${formData.email}
${formData.subject ? `- Subject: ${formData.subject}` : ''}
- Sent: ${new Date().toLocaleString()}

What happens next?
I typically respond to messages within 24 hours. I'll review your message carefully and get back to you as soon as possible.

Thank you again for reaching out. I look forward to our conversation!

Best regards,
Mohamed Samir Loul
Software Development Student
Netherlands

---
This is an automated confirmation email from Mohamed Samir Loul's portfolio website.
        `
    };
}

module.exports = {
    getContactNotificationTemplate,
    getConfirmationTemplate
};

