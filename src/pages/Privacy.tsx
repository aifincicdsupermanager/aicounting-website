import './privacy.css';
import logoIcon from "@/assets/logo-icon.png";
import logoWordmark from "@/assets/logo-wordmark.png";

const Privacy = () => {
  return (
    <div className="privacy-doc">
      <div className="doc-wrap">

        {/* Logo */}
        <div className="doc-logo">
          <img src={logoIcon} alt="" style={{ height: '36px', marginRight: '8px', verticalAlign: 'middle' }} />
          <img src={logoWordmark} alt="AiCounting" style={{ height: '36px', verticalAlign: 'middle' }} />
        </div>

        {/* Title */}
        <div className="doc-title">AiFin PTY LTD</div>
        <div className="doc-meta">
          Privacy Statement &nbsp;|&nbsp; Last updated: 30 June 2026 &nbsp;|&nbsp; ACN 637 599 154
        </div>

        {/* 1 */}
        <p className="section-heading">1. Who we are</p>
        <p>AiFin PTY LTD (ACN 637 599 154) is an Australian company that develops and operates AiCounting, an accounting and compliance platform for businesses, accountants, and bookkeepers.</p>
        <p>We are an Australian Privacy Principles (APP) entity under the Privacy Act 1988 and are committed to handling personal information in accordance with the APPs.</p>
        <p>For any privacy-related queries, contact us at <a href="mailto:support@aicounting.com.au">support@aicounting.com.au</a>.</p>

        {/* 2 */}
        <p className="section-heading">2. What this statement covers</p>
        <p>This statement describes how AiFin PTY LTD collects, uses, stores, and shares your own personal information — that is, information about you as a subscriber or invited user — in connection with the AiCounting platform. It applies to personal information we collect through the platform, our website, customer support interactions, and any other services we provide.</p>
        <p>This is different from personal information that subscribers enter into AiCounting about other people, such as their clients, employees, suppliers, or contractors — see Section 3 below for how that is handled.</p>

        {/* 3 */}
        <p className="section-heading">3. What this statement does not cover</p>
        <p>This statement does not apply to personal information that subscribers or their invited users enter into AiCounting about their own clients, employees, suppliers, contractors, or other third parties. In those cases, the subscriber controls that personal information and AiFin processes it only as a service provider on the subscriber's behalf.</p>
        <p>If you are a third party whose personal information has been entered into AiCounting by a subscriber, you should contact that subscriber directly with any queries about how your information is being used.</p>

        {/* 4 */}
        <p className="section-heading">4. Personal information we collect</p>
        <p>The personal information we collect depends on how you use the platform. We collect personal information in the following ways:</p>

        <p className="clause-heading">Account and identity data</p>
        <p>Information you provide when registering and managing your subscription, including your name, email address, phone number, business name, and ABN. This category also includes any correspondence you have with our support team.</p>

        <p className="clause-heading">Financial and compliance data</p>
        <p>Information you enter into AiCounting for compliance and reporting purposes across any of the platform's modules. The specific information collected depends on which modules you use. This category includes sensitive information such as tax file numbers (TFNs), which are handled in accordance with Section 7 of this statement.</p>

        <p className="clause-heading">Usage and technical data</p>
        <p>Information collected automatically when you use the platform, including pages accessed, features used, login times, session duration, IP address, browser type, operating system, and device identifiers. We also collect error logs and system performance data for troubleshooting and platform improvement.</p>

        <p className="clause-heading">Third-party integration data</p>
        <p>Where you use an Integrated Service within AiCounting, the relevant third-party provider may share data with us to enable the integration. The specific data shared depends on the integration and will be described to you when you access that service.</p>

        {/* 5 */}
        <p className="section-heading">5. How we use your personal information</p>
        <p>We use personal information only for the purposes for which it was collected or for directly related purposes. These include:</p>

        <p className="clause-heading">Providing and operating the platform</p>
        <ul>
          <li>Creating and managing your account and subscription.</li>
          <li>Processing payroll, superannuation, BAS, and other compliance submissions on your behalf.</li>
          <li>Enabling integrated third-party services you have opted into.</li>
          <li>Providing customer support.</li>
        </ul>
        <p className="intro-summary">Data categories used: account and identity data, financial and compliance data, third-party integration data.</p>

        <p className="clause-heading">Improving our services</p>
        <ul>
          <li>Analysing usage patterns to improve platform features and performance.</li>
          <li>Developing new features and products.</li>
          <li>Creating anonymised, aggregated statistical data for business analytics — once anonymised, this data does not identify you.</li>
        </ul>
        <p className="intro-summary">Data categories used: account and identity data, financial and compliance data, usage and technical data.</p>

        <p className="clause-heading">Communications</p>
        <ul>
          <li>Sending service updates, invoices, security alerts, and compliance-related notifications.</li>
          <li>Responding to your support queries.</li>
          <li>Sending product information and updates where you have consented to receive these.</li>
        </ul>
        <p className="intro-summary">Data categories used: account and identity data, financial and compliance data, usage and technical data.</p>

        <p className="clause-heading">Legal and compliance obligations</p>
        <ul>
          <li>Complying with our obligations under the Privacy Act 1988 and other applicable Australian laws.</li>
          <li>Responding to lawful requests from regulatory authorities.</li>
          <li>Protecting the security and integrity of the platform.</li>
        </ul>
        <p className="intro-summary">Data categories used: account and identity data, financial and compliance data, usage and technical data.</p>

        {/* 6 */}
        <p className="section-heading">6. How we share your personal information</p>
        <p>We do not sell your personal information. We share personal information only in the following circumstances:</p>

        <p className="clause-heading">Service providers</p>
        <p>We may share personal information with third-party service providers who assist us in operating the platform, including cloud hosting providers (such as Amazon Web Services), payment processors, and technical support services. These providers are contractually required to handle personal information only for the purpose of providing services to us and in accordance with applicable privacy law.</p>

        <p className="clause-heading">Integrated third-party services</p>
        <p>Where you enable an Integrated Service within AiCounting, we will transmit the data necessary to enable that service to the relevant third-party provider. Once transmitted, that provider's own privacy policy governs how they handle your data. AiFin will make applicable third-party terms accessible to you when you access that service.</p>

        <p className="clause-heading">Regulatory and legal requirements</p>
        <p>We may disclose personal information to the ATO, ASIC, OAIC, or other regulatory or law enforcement bodies where required by law, or where we believe disclosure is necessary to protect the rights or safety of AiFin, our users, or the public.</p>

        <p className="clause-heading">Business transfers</p>
        <p>If AiFin is involved in a merger, acquisition, or sale of assets, personal information may be transferred as part of that transaction. We will notify affected users of any such transfer.</p>

        <p className="clause-heading">With your consent</p>
        <p>We may share personal information with other parties where you have given us explicit consent to do so.</p>

        {/* 7 */}
        <p className="section-heading">7. Sensitive financial and compliance data</p>
        <p>AiCounting handles sensitive financial and compliance data across its modules, including payroll, tax, BAS, superannuation, and other compliance functions. This data may include personal information belonging to your employees, clients, suppliers, or contractors — such as financial records, salary details, and tax file numbers (TFNs). TFNs are a legally designated sensitive category under the Privacy Act 1988 and applicable tax legislation, and may be required across multiple modules wherever tax obligations arise.</p>
        <p>We handle TFNs only to the extent necessary to provide the relevant compliance functions, and in accordance with the TFN Guidelines issued by the OAIC. We do not use TFNs for any purpose other than enabling the compliance features of the platform. Other sensitive financial and compliance data may also be used to provide insights and analytics about your own business or, where you are acting on behalf of clients, about your clients' businesses, or in anonymised or aggregated form — meaning no individual or business can be identified — to improve our services, develop new services, and for industry analysis and other platform purposes.</p>
        <p>As the subscriber, you are responsible for ensuring that you have obtained all necessary consents from your employees, clients, suppliers, or contractors before entering their personal information into AiCounting, and for complying with your own obligations under the Privacy Act 1988 and other applicable Australian privacy and tax laws as the controller of that information. This applies regardless of which module you are using.</p>

        {/* 8 */}
        <p className="section-heading">8. Data storage and security</p>
        <p>Your data is stored on servers hosted by Amazon Web Services (AWS) in Australia. We implement appropriate technical and organisational security measures to protect personal information against unauthorised access, loss, misuse, or disclosure.</p>
        <p>These measures include encryption of data in transit and at rest, access controls and authentication requirements, audit logging of system access, and regular security monitoring.</p>
        <p>While we take reasonable steps to protect your personal information, no method of electronic storage is completely secure. We cannot guarantee absolute security and are not liable for unauthorised access that occurs despite our reasonable security measures.</p>
        <p>If we become aware of a data breach that is likely to result in serious harm to affected individuals, we will notify the affected subscribers and the Office of the Australian Information Commissioner (OAIC) in accordance with our obligations under the Notifiable Data Breaches scheme.</p>

        {/* 9 */}
        <p className="section-heading">9. International access</p>
        <p>Certain data processed through AiCounting for ATO lodgements and compliance purposes is subject to Australian data residency requirements and remains stored in Australia at all times.</p>
        <p>Where members of our team are located outside Australia, they may remotely access data stored on our servers in the course of providing our services. We take reasonable steps to ensure your information is handled in accordance with Australian privacy standards.</p>
        <p>By using AiCounting, you consent to your personal information being handled as described in this statement, including being remotely accessed by members of our team who may be located outside Australia.</p>

        {/* 10 */}
        <p className="section-heading">10. Data retention</p>
        <p>We retain your personal information for as long as your account is active. Following termination, your access to the platform ends immediately. We will use reasonable efforts to assist with data export requests made as soon as possible after termination, though we cannot guarantee how long data remains available. We recommend keeping your own regular backups while your subscription is active. You remain responsible for your own record-keeping obligations under applicable law.</p>
        <p>You may request deletion of your personal information at any time by contacting us. We will action deletion requests within a reasonable timeframe.</p>

        {/* 11 */}
        <p className="section-heading">11. Your rights</p>
        <p>Under the Privacy Act 1988 and the Australian Privacy Principles, you have the following rights in relation to your personal information:</p>
        <ul>
          <li><strong>Access:</strong> you may request a copy of the personal information we hold about you.</li>
          <li><strong>Correction:</strong> you may request that we correct personal information that is inaccurate, out of date, incomplete, or misleading.</li>
          <li><strong>Complaint:</strong> you may lodge a complaint with us if you believe we have mishandled your personal information.</li>
          <li><strong>Deletion:</strong> you may request deletion of your personal information at any time. See Section 10 for your own record-keeping responsibilities.</li>
          <li><strong>Opt-out of marketing:</strong> you may opt out of receiving marketing communications at any time by following the unsubscribe instructions in any marketing email, or by contacting us directly.</li>
        </ul>
        <p>To exercise any of these rights, contact us at <a href="mailto:support@aicounting.com.au">support@aicounting.com.au</a>. We will respond to requests within 30 calendar days. If we are unable to action your request, we will explain why.</p>
        <p>If you are not satisfied with our response to a privacy complaint, you may escalate your complaint to the Office of the Australian Information Commissioner (OAIC) at <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">oaic.gov.au</a> or by calling 1300 363 992.</p>

        {/* 12 */}
        <p className="section-heading">12. Cookies and tracking</p>
        <p>AiCounting uses cookies and similar tracking technologies to operate and improve the platform. These include session cookies required for platform functionality and analytics cookies that help us understand how users interact with the platform.</p>
        <p>You may disable cookies through your browser settings, but doing so may affect the functionality of the platform. We do not use cookies for third-party advertising purposes.</p>

        {/* 13 */}
        <p className="section-heading">13. Links to third-party services</p>
        <p>The AiCounting platform may contain links to or integrations with third-party services. This Privacy Statement does not apply to those third-party services. We encourage you to review the privacy policies of any third-party service you use in connection with AiCounting.</p>

        {/* 14 */}
        <p className="section-heading">14. Updates to this statement</p>
        <p>We may update this Privacy Statement from time to time. Where we make a material change, we will notify you by email or through the platform at least 30 calendar days before the change takes effect. The date of the most recent update is shown at the top of this document.</p>
        <p>Your continued use of AiCounting after a notified change takes effect constitutes acceptance of the updated statement.</p>

        {/* 15 */}
        <p className="section-heading">15. How to contact us</p>
        <p>For any questions, requests, or complaints relating to this Privacy Statement or how we handle your personal information, please contact:</p>
        <p>
          <strong>AiFin PTY LTD</strong><br />
          ACN 637 599 154<br />
          <a href="mailto:support@aicounting.com.au">support@aicounting.com.au</a>
        </p>
        <p>This statement supersedes any prior privacy notices. Effective date: 30 June 2026.</p>

        <button className="print-btn" onClick={() => window.print()}>Print Statement</button>

        <div className="doc-footer">
          Privacy Statement &nbsp;|&nbsp; AiFin PTY LTD (ACN 637 599 154) &nbsp;|&nbsp; Effective date: 30 June 2026
        </div>

      </div>
    </div>
  );
};

export default Privacy;
