import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    const authenticatedEmail = process.env.EMAIL_USER || 'admin.sales@okagency.in';
    const receiverEmail = process.env.EMAIL_RECEIVER || 'admin.sales@okagency.in';

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.hostinger.com',
      port: Number(process.env.EMAIL_PORT) || 465,
      secure: process.env.EMAIL_SECURE === 'true',
      auth: {
        user: authenticatedEmail,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Create email content with the user's information
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    // Send the email - IMPORTANT: from address must match authenticated email
    await transporter.sendMail({
      from: authenticatedEmail, // Must match the authenticated user
      to: receiverEmail,
      replyTo: email, // Set reply-to as the user's email
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      html: emailContent,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error){ 
    console.error('❌ Error in /api/contact:', error);
    return new Response(JSON.stringify({ error: 'Server error', details: String(error) }), {
      status: 500,
    });
  }
}