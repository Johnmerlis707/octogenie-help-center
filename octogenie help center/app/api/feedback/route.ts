import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend only if API key is available
const getResend = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new Resend(apiKey);
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { comment, liked, pageId } = body;

    // Validate input
    if (liked === null && !comment?.trim()) {
      return NextResponse.json(
        { error: 'Please provide feedback or select helpful/not helpful' },
        { status: 400 }
      );
    }

    // Prepare email content
    const feedbackType = liked === true ? 'Helpful ✅' : liked === false ? 'Not Helpful ❌' : 'No rating';
    const pageInfo = pageId ? `Page: ${pageId}` : 'Page: Unknown';
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'UTC',
      dateStyle: 'full',
      timeStyle: 'long'
    });

    const emailSubject = `Help Center Feedback - ${pageInfo}`;
    const emailBody = `
New feedback received from OctoGenie Help Center

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FEEDBACK DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Rating: ${feedbackType}
${pageInfo}
Timestamp: ${timestamp}

${comment?.trim() ? `Comment:\n${comment.trim()}` : 'No additional comments provided.'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

    const recipientEmail = 'john@octogenie.com';
    
    // Send email using Resend
    try {
      const resend = getResend();
      
      // Check if Resend API key is configured
      if (!resend || !process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY is not configured. Email not sent.');
        console.log('Email would be sent to:', recipientEmail);
        console.log('Email subject:', emailSubject);
        console.log('Email body:', emailBody);
        
        // Return success but log warning
        return NextResponse.json(
          { 
            success: true, 
            message: 'Feedback logged (email service not configured)',
            warning: 'RESEND_API_KEY environment variable is not set. Please configure it to send emails. See EMAIL_SETUP.md for instructions.'
          },
          { status: 200 }
        );
      }

      // Send email via Resend
      const { data, error } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev', // Default Resend domain for testing
        to: recipientEmail,
        replyTo: process.env.RESEND_REPLY_TO_EMAIL || recipientEmail,
        subject: emailSubject,
        text: emailBody,
      });

      if (error) {
        console.error('Resend API error:', error);
        throw new Error(`Failed to send email: ${error.message}`);
      }

      console.log('Email sent successfully:', data);

      return NextResponse.json(
        { 
          success: true, 
          message: 'Feedback submitted successfully and email sent',
          emailId: data?.id
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      // Don't fail the request if email fails - still log it
      console.log('Email content that failed to send:');
      console.log('To:', recipientEmail);
      console.log('Subject:', emailSubject);
      console.log('Body:', emailBody);
      
      // Return success but indicate email may have failed
      return NextResponse.json(
        { 
          success: true, 
          message: 'Feedback received (email delivery may have failed)',
          warning: 'Email could not be sent. Please check server logs.',
          error: emailError instanceof Error ? emailError.message : 'Unknown error'
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Error processing feedback:', error);
    return NextResponse.json(
      { error: 'Failed to process feedback. Please try again.' },
      { status: 500 }
    );
  }
}
