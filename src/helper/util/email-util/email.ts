const nodemailer = require("nodemailer");

async function emailSend(error) {
    try {
        let transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: false,
            auth: {
                user: 'aretnakaran@westpoint.net',
                pass: 'Interface@333',
            },
        });

        let message = {
            from: 'aretnakaran@westpoint.net',
            to: 'aretnakaran@westpoint.net',
            subject: 'Testing Subject',
            text: error,
            attachments: [
                {
                    filename: 'cucumber-report.html',
                    path: 'test-results/cucumber-report.html',
                },
            ],
        };

        let info = await transporter.sendMail(message);
        console.log('=====Email Sent=====');
    } catch (error) {
        throw new Error(error);
    }
}

emailSend("Example error message");


