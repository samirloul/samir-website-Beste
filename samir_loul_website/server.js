require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const nodemailer = require('nodemailer');
const { getContactNotificationTemplate, getConfirmationTemplate } = require('./email-templates');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'html')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/img', express.static(path.join(__dirname, 'img')));

// Email transporter configuration
let transporter = null;

// Initialize email transporter if credentials are provided
if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.EMAIL_PORT) || 587,
        secure: process.env.EMAIL_SECURE === 'true',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });
    
    // Verify transporter configuration
    transporter.verify((error, success) => {
        if (error) {
            console.log('❌ Email transporter verification failed:', error.message);
            console.log('📧 Email functionality will be disabled. Please check your email configuration.');
            transporter = null;
        } else {
            console.log('✅ Email transporter is ready to send emails');
        }
    });
} else {
    console.log('⚠️  Email credentials not provided. Email functionality will be disabled.');
    console.log('📧 To enable email functionality, please configure EMAIL_USER and EMAIL_PASS in .env file');
}

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Basic validation
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: 'Please fill in all required fields (name, email, message).'
        });
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: 'Please enter a valid email address.'
        });
    }
    
    const formData = { name, email, subject, message };
    
    // Log the contact form submission
    console.log('📧 Contact form submission received:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject || 'No subject');
    console.log('Message:', message);
    console.log('Timestamp:', new Date().toISOString());
    console.log('---');
    
    // Send emails if transporter is available
    if (transporter) {
        try {
            // Send notification email to Samir
            const notificationTemplate = getContactNotificationTemplate(formData);
            await transporter.sendMail({
                from: `"${process.env.WEBSITE_NAME || 'Portfolio Website'}" <${process.env.EMAIL_USER}>`,
                to: process.env.CONTACT_EMAIL || 'sameerloul2010@gmail.com',
                subject: notificationTemplate.subject,
                html: notificationTemplate.html,
                text: notificationTemplate.text
            });
            
            console.log('✅ Notification email sent to:', process.env.CONTACT_EMAIL);
            
            // Send confirmation email to visitor
            const confirmationTemplate = getConfirmationTemplate(formData);
            await transporter.sendMail({
                from: `"Mohamed Samir Loul" <${process.env.EMAIL_USER}>`,
                to: email,
                subject: confirmationTemplate.subject,
                html: confirmationTemplate.html,
                text: confirmationTemplate.text
            });
            
            console.log('✅ Confirmation email sent to:', email);
            
            res.json({
                success: true,
                message: 'Thank you for your message! I will get back to you soon. Please check your email for confirmation.'
            });
            
        } catch (error) {
            console.error('❌ Error sending emails:', error);
            
            // Still return success to user, but log the error
            res.json({
                success: true,
                message: 'Thank you for your message! I will get back to you soon.'
            });
        }
    } else {
        // Email functionality disabled, but still accept the form
        res.json({
            success: true,
            message: 'Thank you for your message! I will get back to you soon.'
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        emailEnabled: !!transporter
    });
});

// Catch all route - serve index.html for any unmatched routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server is running on http://0.0.0.0:${PORT}`);
    console.log('📧 Contact form submissions will be logged to console');
    if (transporter) {
        console.log('✉️  Email functionality is enabled');
        console.log('📬 Contact emails will be sent to:', process.env.CONTACT_EMAIL || 'sameerloul2010@gmail.com');
    } else {
        console.log('⚠️  Email functionality is disabled - check email configuration');
    }
});

module.exports = app;

