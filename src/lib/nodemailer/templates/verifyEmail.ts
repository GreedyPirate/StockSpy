export const VERIFY_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">
    <meta name="x-apple-disable-message-reformatting">
    <title>Verify Your Email</title>
    <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:AllowPNG/>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
    <style type="text/css">
        /* Dark mode styles */
        @media (prefers-color-scheme: dark) {
            .email-container {
                background-color: #141414 !important;
                border: 1px solid #30333A !important;
            }
            .dark-bg {
                background-color: #050505 !important;
            }
            .dark-text {
                color: #ffffff !important;
            }
            .dark-text-secondary {
                color: #9ca3af !important;
            }
            .dark-text-muted {
                color: #6b7280 !important;
            }
            .dark-border {
                border-color: #30333A !important;
            }
        }
        
        @media only screen and (max-width: 600px) {
            .email-container {
                width: 100% !important;
                margin: 0 !important;
            }
            .mobile-padding {
                padding: 24px !important;
            }
            .mobile-header-padding {
                padding: 24px 24px 12px 24px !important;
            }
            .mobile-text {
                font-size: 14px !important;
                line-height: 1.5 !important;
            }
            .mobile-title {
                font-size: 24px !important;
                line-height: 1.3 !important;
            }
            .mobile-button {
                width: 100% !important;
                text-align: center !important;
            }
            .mobile-button a {
                width: calc(100% - 64px) !important;
                display: block !important;
                text-align: center !important;
            }
            .mobile-outer-padding {
                padding: 20px 10px !important;
            }
        }
        @media only screen and (max-width: 480px) {
            .mobile-title {
                font-size: 22px !important;
            }
            .mobile-padding {
                padding: 15px !important;
            }
            .mobile-header-padding {
                padding: 15px 15px 8px 15px !important;
            }
        }
        a,
        a:link,
        a:visited {
          color: #CCDADC;
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #050505; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
    <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="background-color: #050505;">
        <tr>
            <td align="center" class="mobile-outer-padding" style="padding: 40px 20px;">
                <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" class="email-container" style="max-width: 600px; background-color: #141414; border-radius: 8px; border: 1px solid #30333A;">
                    
                    <!-- Header with Logo -->
                    <tr>
                        <td align="left" class="mobile-header-padding" style="padding: 40px 40px 20px 40px;">
                            <img src="https://ik.imagekit.io/a6fkjou7d/logo.png?updatedAt=1756378431634" alt="Signalist Logo" width="150" style="max-width: 100%; height: auto;">
                        </td>
                    </tr>
                    
                    <!-- Main Content -->
                    <tr>
                        <td class="mobile-padding" style="padding: 40px 40px 40px 40px;">
                            
                            <!-- Verification Heading -->
                            <h1 class="mobile-title dark-text" style="margin: 0 0 30px 0; font-size: 24px; font-weight: 600; color: #FDD458; line-height: 1.2;">
                                Verify Your Email Address
                            </h1>
                            
                            <!-- Intro Text -->
                            <p class="mobile-text dark-text-secondary" style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
                                Hello {{name}},
                            </p>
                            
                            <p class="mobile-text dark-text-secondary" style="margin: 0 0 30px 0; font-size: 16px; line-height: 1.6; color: #CCDADC;">
                                Thank you for signing up! Please verify your email address by clicking the button below to activate your account.
                            </p>
                            
                            <!-- CTA Button - Outlook 兼容版 -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 0 0 40px 0;">
                              <tr>
                                <td align="center">
                                  <!--[if mso]>
                                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" arcsize="10%" stroke="f" fillcolor="#FDD458" style="width:200px;height:44px;">
                                      <v:textbox inset="0,0,0,0" style="font-size:16px;font-weight:500;color:#000;text-align:center;line-height:44px;">
                                        <![endif]-->
                                        <a href="{{verificationLink}}" 
                                           style="display: inline-block; border-radius: 8px; background-color: #FDD458; color: #000000 !important; text-decoration: none; padding: 12px 24px; font-size: 16px; font-weight: 500; line-height: 1; text-align: center; mso-padding-alt: 12px 24px;">
                                          <span style="color: #000000; text-decoration: none;">
                                             Verify Email Address
                                          </span>
                                        </a>
                                        <!--[if mso]>
                                      </v:textbox>
                                    </v:roundrect>
                                  <![endif]-->
                                </td>
                              </tr>
                            </table>
                            
                            <!-- Security Notice - Outlook 兼容版 -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 0 0 30px 0;">
                              <tr>
                                <td align="center" style="font-size: 14px; line-height: 21px; color: #999999; font-family: Arial, sans-serif;">
                                  This verification link will expire in 24 hours.<br>
                                  If you didn't create an account, please ignore this email.
                                </td>
                              </tr>
                            </table>
                                                        
                            <!-- Footer Text - Outlook 兼容版 -->
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 40px 0 0 0;">
                              <tr>
                                <td align="center" style="font-size: 14px; line-height: 21px; color: #999999; font-family: Arial, sans-serif;">
                                  Signalist HQ, 200 Market Street, San Francisco, CA 94105<br>
                                  <a href="http://localhost:3000/" style="color: #999999 !important; text-decoration: underline; font-family: Arial, sans-serif;">Unsubscribe</a> | 
                                  <a href="http://localhost:3000/" style="color: #999999 !important; text-decoration: underline; font-family: Arial, sans-serif;">Visit Signalist</a><br>
                                  &copy; 2025 Signalist
                                </td>
                              </tr>
                            </table>
                        </td>
                    </tr>
                    
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;