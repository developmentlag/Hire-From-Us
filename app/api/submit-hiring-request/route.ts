import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import fs from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const companyName = (formData.get('companyName') as string) || '';
    const contactPerson = (formData.get('contactPerson') as string) || '';
    const email = (formData.get('email') as string) || '';
    const phone = (formData.get('phone') as string) || '';
    const hiringRole = (formData.get('hiringRole') as string) || 'DevOps / Cloud Role';
    const experience = (formData.get('experience') as string) || 'Not specified';
    const location = (formData.get('location') as string) || 'Mumbai / Hybrid / Remote';
    const openings = (formData.get('openings') as string) || '1-2';
    const skills = (formData.get('skills') as string) || '';
    const jdText = (formData.get('jdText') as string) || '';
    const jdFile = formData.get('jdFile') as File | null;

    if (!companyName.trim() || !contactPerson.trim() || !email.trim() || !phone.trim()) {
      return NextResponse.json(
        { error: 'Company Name, Contact Person, Email, and Phone number are required.' },
        { status: 400 }
      );
    }

    const submissionId = 'DIM-' + Math.floor(100000 + Math.random() * 900000);
    const submittedAt = new Date().toISOString();

    // 1. Prepare attachments if a file was uploaded
    let attachments: Array<{ filename: string; content: Buffer }> = [];
    let savedFileName: string | null = null;

    if (jdFile && jdFile.size > 0) {
      const arrayBuffer = await jdFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      attachments.push({
        filename: jdFile.name,
        content: buffer,
      });

      // Save a local copy of the uploaded JD as backup (in /tmp on Vercel or data/leads locally)
      try {
        const baseDir = process.env.VERCEL ? '/tmp' : path.join(process.cwd(), 'data', 'leads');
        const uploadDir = path.join(baseDir, 'uploads');
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir, { recursive: true });
        }
        const safeName = `${submissionId}_${jdFile.name.replace(/[^a-zA-Z0-9._-]/g, '_')}`;
        fs.writeFileSync(path.join(uploadDir, safeName), buffer);
        savedFileName = safeName;
      } catch (saveErr) {
        // Non-blocking in serverless environments
      }
    }

    // 2. Save a server-side backup log so no lead is ever lost
    try {
      const baseDir = process.env.VERCEL ? '/tmp' : path.join(process.cwd(), 'data', 'leads');
      if (!fs.existsSync(baseDir)) {
        fs.mkdirSync(baseDir, { recursive: true });
      }
      const record = {
        submissionId,
        submittedAt,
        companyName,
        contactPerson,
        email,
        phone,
        hiringRole,
        experience,
        location,
        openings,
        skills,
        jdText,
        hasFile: Boolean(jdFile && jdFile.size > 0),
        savedFileName,
      };
      fs.appendFileSync(
        path.join(baseDir, 'submissions.jsonl'),
        JSON.stringify(record) + '\n'
      );
    } catch (logErr) {
      // Non-blocking in serverless environments
    }

    // 3. Dispatch Email via Resend if API key is configured
    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'careers@devopsinstitutemumbai.co.in';
    const fromSender = process.env.RESEND_FROM_EMAIL || 'DevOps Institute Hiring <hiring@devopsinstitutemumbai.co.in>';

    let emailSent = false;
    let emailError: string | null = null;

    if (apiKey) {
      try {
        const resend = new Resend(apiKey);
        const cleanPhone = phone.replace(/[^0-9+]/g, '');
        const waPhone = cleanPhone.replace(/^\+/, '');

        // Bulletproof HTML email using standard tables with full Gmail/Outlook compatibility
        const emailHtml = `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Employer Hiring Request</title>
</head>
<body style="margin: 0; padding: 20px; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f1f5f9; padding: 10px 0;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #cbd5e1; box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);">
          
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #0284c7 100%); padding: 32px 28px; text-align: left;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <span style="display: inline-block; background: rgba(255, 255, 255, 0.18); color: #ffffff; padding: 5px 12px; border-radius: 9999px; font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">
                      REFERENCE ID: ${submissionId}
                    </span>
                  </td>
                  <td align="right" style="color: #bae6fd; font-size: 11px; font-weight: 600;">
                    ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </td>
                </tr>
                <tr>
                  <td colspan="2" style="padding-top: 14px;">
                    <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px; line-height: 1.25;">
                      🚀 New Employer Requirement Received
                    </h1>
                    <p style="margin: 8px 0 0 0; font-size: 14px; color: #e0f2fe; line-height: 1.4;">
                      A company has requested candidate profiles from DevOps Institute Mumbai.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 28px 24px;">

              <!-- SECTION 1: Employer & Contact -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 22px;">
                <tr>
                  <td style="padding-bottom: 8px;">
                    <span style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.2px; color: #1e3a8a;">
                      🏢 Company &amp; Contact Details
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
                      <tr>
                        <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 13px; color: #64748b; font-weight: 500; width: 36%;">
                          Company Name
                        </td>
                        <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #0f172a; font-weight: 700; width: 64%; text-align: right;">
                          ${companyName}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 13px; color: #64748b; font-weight: 500;">
                          Contact Person
                        </td>
                        <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #0f172a; font-weight: 700; text-align: right;">
                          ${contactPerson}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 13px; color: #64748b; font-weight: 500;">
                          Phone Number
                        </td>
                        <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #0284c7; font-weight: 700; text-align: right;">
                          <a href="tel:${cleanPhone}" style="color: #0284c7; text-decoration: none;">${phone}</a>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 16px; font-size: 13px; color: #64748b; font-weight: 500;">
                          Work Email
                        </td>
                        <td style="padding: 12px 16px; font-size: 14px; color: #0284c7; font-weight: 700; text-align: right;">
                          <a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- SECTION 2: Role & Criteria -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 22px;">
                <tr>
                  <td style="padding-bottom: 8px;">
                    <span style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.2px; color: #1e3a8a;">
                      🎯 Role Requirements
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
                      <tr>
                        <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 13px; color: #64748b; font-weight: 500; width: 36%;">
                          Hiring Role
                        </td>
                        <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #1e3a8a; font-weight: 800; width: 64%; text-align: right;">
                          ${hiringRole}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 13px; color: #64748b; font-weight: 500;">
                          Experience Needed
                        </td>
                        <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #0f172a; font-weight: 700; text-align: right;">
                          ${experience}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 13px; color: #64748b; font-weight: 500;">
                          Work Location &amp; Mode
                        </td>
                        <td style="padding: 12px 16px; border-bottom: 1px solid #e2e8f0; font-size: 14px; color: #0f172a; font-weight: 700; text-align: right;">
                          ${location}
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 16px; border-bottom: ${skills ? '1px solid #e2e8f0' : 'none'}; font-size: 13px; color: #64748b; font-weight: 500;">
                          Open Openings
                        </td>
                        <td style="padding: 12px 16px; border-bottom: ${skills ? '1px solid #e2e8f0' : 'none'}; font-size: 14px; color: #0f172a; font-weight: 700; text-align: right;">
                          ${openings}
                        </td>
                      </tr>
                      ${skills ? `
                      <tr>
                        <td style="padding: 12px 16px; font-size: 13px; color: #64748b; font-weight: 500;">
                          Skills / Tech Stack
                        </td>
                        <td style="padding: 12px 16px; font-size: 13px; color: #0f172a; font-weight: 700; text-align: right;">
                          ${skills}
                        </td>
                      </tr>` : ''}
                    </table>
                  </td>
                </tr>
              </table>

              <!-- SECTION 3: Job Description / Notes -->
              ${jdText ? `
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 22px;">
                <tr>
                  <td style="padding-bottom: 8px;">
                    <span style="font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.2px; color: #1e3a8a;">
                      📝 Notes / Pasted JD Text
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="background-color: #f8fafc; border-left: 4px solid #0284c7; border-top: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; border-radius: 0 10px 10px 0; padding: 14px 18px; font-size: 13px; line-height: 1.6; color: #334155; white-space: pre-wrap;">
${jdText}
                  </td>
                </tr>
              </table>` : ''}

              <!-- SECTION 4: Attached File Indicator -->
              ${jdFile && jdFile.size > 0 ? `
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px; background-color: #f0fdf4; border: 1px solid #86efac; border-radius: 12px;">
                <tr>
                  <td style="padding: 14px 18px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="36" style="vertical-align: middle;">
                          <div style="width: 32px; height: 32px; border-radius: 8px; background-color: #22c55e; color: #ffffff; text-align: center; line-height: 32px; font-size: 16px;">
                            📎
                          </div>
                        </td>
                        <td style="vertical-align: middle; padding-left: 10px;">
                          <p style="margin: 0; font-size: 14px; font-weight: 700; color: #14532d;">
                            ${jdFile.name}
                          </p>
                          <p style="margin: 2px 0 0 0; font-size: 12px; color: #15803d;">
                            Attached as email attachment (${(jdFile.size / 1024).toFixed(1)} KB)
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>` : ''}

              <!-- Quick Action Buttons -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                <tr>
                  <td align="center">
                    <p style="margin: 0 0 14px 0; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b;">
                      Quick Response to ${contactPerson}:
                    </p>
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding: 0 5px;">
                          <a href="tel:${cleanPhone}" style="display: inline-block; background-color: #0284c7; color: #ffffff; padding: 10px 18px; border-radius: 8px; font-size: 13px; font-weight: 700; text-decoration: none;">
                            📞 Call
                          </a>
                        </td>
                        <td style="padding: 0 5px;">
                          <a href="https://wa.me/${waPhone}?text=Hello%20${encodeURIComponent(contactPerson)}%2C%20thank%20you%20for%20contacting%20DevOps%20Institute%20Mumbai%20regarding%20your%20${encodeURIComponent(hiringRole)}%20requirement%20(Ref%3A%20${submissionId})." style="display: inline-block; background-color: #16a34a; color: #ffffff; padding: 10px 18px; border-radius: 8px; font-size: 13px; font-weight: 700; text-decoration: none;">
                            💬 WhatsApp
                          </a>
                        </td>
                        <td style="padding: 0 5px;">
                          <a href="mailto:${email}?subject=Shortlisted%20Candidate%20Profiles%20for%20${encodeURIComponent(companyName)}%20(Ref%3A%20${submissionId})" style="display: inline-block; background-color: #1e3a8a; color: #ffffff; padding: 10px 18px; border-radius: 8px; font-size: 13px; font-weight: 700; text-decoration: none;">
                            ✉️ Reply Email
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 24px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; line-height: 1.5;">
              <p style="margin: 0 0 4px 0; font-weight: 700; color: #0f172a;">
                DevOps Institute Mumbai (DIM) • Placement Desk
              </p>
              <p style="margin: 0;">
                2nd Floor, Awfis, Kalpataru Prime, Wagle Estate, Thane West, Maharashtra 400604<br />
                Desk: +91 91361 55079 • <a href="https://devopsmumbai.com" style="color: #0284c7; text-decoration: none;">devopsmumbai.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
        `;

        const sendResult = await resend.emails.send({
          from: fromSender,
          to: [recipientEmail],
          replyTo: email,
          subject: `🚀 New Hiring Request: ${companyName} — ${hiringRole} (Ref: ${submissionId})`,
          html: emailHtml,
          attachments: attachments.length > 0 ? attachments : undefined,
        });

        if (sendResult.error) {
          console.error('Resend returned error:', sendResult.error);
          emailError = sendResult.error.message;
        } else {
          emailSent = true;
        }
      } catch (err: any) {
        console.error('Failed to send email via Resend:', err);
        emailError = err?.message || 'Error executing email send';
      }
    } else {
      console.warn('RESEND_API_KEY is not defined. Lead was logged to disk backup.');
    }

    return NextResponse.json({
      success: true,
      submissionId,
      emailSent,
      hasFile: attachments.length > 0,
      note: emailSent ? 'Email dispatched to placement desk.' : 'Recorded in local backup log.',
    });
  } catch (error: any) {
    console.error('Error handling hiring request:', error);
    return NextResponse.json(
      { error: error?.message || 'Internal server error processing hiring request' },
      { status: 500 }
    );
  }
}
