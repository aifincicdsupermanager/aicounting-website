import logoIcon from "@/assets/logo-icon.png";
import logoWordmark from "@/assets/logo-wordmark.png";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded shadow-sm border border-gray-200 px-14 py-12">

        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <img src={logoIcon} alt="" className="h-9 w-9 object-contain" />
          <img src={logoWordmark} alt="AiCounting" className="h-9 object-contain" />
        </div>

        {/* Title */}
        <h1 className="text-center font-heading text-xl font-bold text-primary tracking-tight mb-1">
          Privacy Statement
        </h1>
        <p className="text-center text-sm text-gray-400 mb-8">
          Last updated: 30 June 2026 &nbsp;|&nbsp; AiFin PTY LTD (ACN 637 599 154)
        </p>

        {/* 1 */}
        <Section heading="1. Who we are">
          <p>AiFin PTY LTD (ACN 637 599 154) is an Australian company that develops and operates AiCounting, an accounting and compliance platform for businesses, accountants, and bookkeepers.</p>
          <p>We are an Australian Privacy Principles (APP) entity under the Privacy Act 1988 and are committed to handling personal information in accordance with the APPs.</p>
          <p>For any privacy-related queries, contact us at <a href="mailto:support@aicounting.com.au" className="text-primary underline">support@aicounting.com.au</a>.</p>
        </Section>

        {/* 2 */}
        <Section heading="2. What this statement covers">
          <p>This statement describes how AiFin PTY LTD collects, uses, stores, and shares your own personal information — that is, information about you as a subscriber or invited user — in connection with the AiCounting platform. It applies to personal information we collect through the platform, our website, customer support interactions, and any other services we provide.</p>
          <p>This is different from personal information that subscribers enter into AiCounting about other people, such as their clients, employees, suppliers, or contractors — see Section 3 below for how that is handled.</p>
        </Section>

        {/* 3 */}
        <Section heading="3. What this statement does not cover">
          <p>This statement does not apply to personal information that subscribers or their invited users enter into AiCounting about their own clients, employees, suppliers, contractors, or other third parties. In those cases, the subscriber controls that personal information and AiFin processes it only as a service provider on the subscriber's behalf.</p>
          <p>If you are a third party whose personal information has been entered into AiCounting by a subscriber, you should contact that subscriber directly with any queries about how your information is being used.</p>
        </Section>

        {/* 4 */}
        <Section heading="4. Personal information we collect">
          <p>The personal information we collect depends on how you use the platform. We collect personal information in the following ways:</p>

          <SubHeading>Account and identity data</SubHeading>
          <p>Information you provide when registering and managing your subscription, including your name, email address, phone number, business name, and ABN. This category also includes any correspondence you have with our support team.</p>

          <SubHeading>Financial and compliance data</SubHeading>
          <p>Information you enter into AiCounting for compliance and reporting purposes across any of the platform's modules. The specific information collected depends on which modules you use. This category includes sensitive information such as tax file numbers (TFNs), which are handled in accordance with Section 7 of this statement.</p>

          <SubHeading>Usage and technical data</SubHeading>
          <p>Information collected automatically when you use the platform, including pages accessed, features used, login times, session duration, IP address, browser type, operating system, and device identifiers. We also collect error logs and system performance data for troubleshooting and platform improvement.</p>

          <SubHeading>Third-party integration data</SubHeading>
          <p>Where you use an Integrated Service within AiCounting, the relevant third-party provider may share data with us to enable the integration. The specific data shared depends on the integration and will be described to you when you access that service.</p>
        </Section>

        {/* 5 */}
        <Section heading="5. How we use your personal information">
          <p>We use personal information only for the purposes for which it was collected or for directly related purposes. These include:</p>

          <SubHeading>Providing and operating the platform</SubHeading>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Creating and managing your account and subscription.</li>
            <li>Processing payroll, superannuation, BAS, and other compliance submissions on your behalf.</li>
            <li>Enabling integrated third-party services you have opted into.</li>
            <li>Providing customer support.</li>
          </ul>
          <p className="text-sm text-gray-500 mb-4">Data categories used: account and identity data, financial and compliance data, third-party integration data.</p>

          <SubHeading>Improving our services</SubHeading>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Analysing usage patterns to improve platform features and performance.</li>
            <li>Developing new features and products.</li>
            <li>Creating anonymised, aggregated statistical data for business analytics — once anonymised, this data does not identify you.</li>
          </ul>
          <p className="text-sm text-gray-500 mb-4">Data categories used: account and identity data, financial and compliance data, usage and technical data.</p>

          <SubHeading>Communications</SubHeading>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Sending service updates, invoices, security alerts, and compliance-related notifications.</li>
            <li>Responding to your support queries.</li>
            <li>Sending product information and updates where you have consented to receive these.</li>
          </ul>
          <p className="text-sm text-gray-500 mb-4">Data categories used: account and identity data, financial and compliance data, usage and technical data.</p>

          <SubHeading>Legal and compliance obligations</SubHeading>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Complying with our obligations under the Privacy Act 1988 and other applicable Australian laws.</li>
            <li>Responding to lawful requests from regulatory authorities.</li>
            <li>Protecting the security and integrity of the platform.</li>
          </ul>
          <p className="text-sm text-gray-500">Data categories used: account and identity data, financial and compliance data, usage and technical data.</p>
        </Section>

        {/* 6 */}
        <Section heading="6. How we share your personal information">
          <p>We do not sell your personal information. We share personal information only in the following circumstances:</p>

          <SubHeading>Service providers</SubHeading>
          <p>We may share personal information with third-party service providers who assist us in operating the platform, including cloud hosting providers (such as Amazon Web Services), payment processors, and technical support services. These providers are contractually required to handle personal information only for the purpose of providing services to us and in accordance with applicable privacy law.</p>

          <SubHeading>Integrated third-party services</SubHeading>
          <p>Where you enable an Integrated Service within AiCounting, we will transmit the data necessary to enable that service to the relevant third-party provider. Once transmitted, that provider's own privacy policy governs how they handle your data. AiFin will make applicable third-party terms accessible to you when you access that service.</p>

          <SubHeading>Regulatory and legal requirements</SubHeading>
          <p>We may disclose personal information to the ATO, ASIC, OAIC, or other regulatory or law enforcement bodies where required by law, or where we believe disclosure is necessary to protect the rights or safety of AiFin, our users, or the public.</p>

          <SubHeading>Business transfers</SubHeading>
          <p>If AiFin is involved in a merger, acquisition, or sale of assets, personal information may be transferred as part of that transaction. We will notify affected users of any such transfer.</p>

          <SubHeading>With your consent</SubHeading>
          <p>We may share personal information with other parties where you have given us explicit consent to do so.</p>
        </Section>

        {/* 7 */}
        <Section heading="7. Sensitive financial and compliance data">
          <p>AiCounting handles sensitive financial and compliance data across its modules, including payroll, tax, BAS, superannuation, and other compliance functions. This data may include personal information belonging to your employees, clients, suppliers, or contractors — such as financial records, salary details, and tax file numbers (TFNs). TFNs are a legally designated sensitive category under the Privacy Act 1988 and applicable tax legislation, and may be required across multiple modules wherever tax obligations arise.</p>
          <p>We handle TFNs only to the extent necessary to provide the relevant compliance functions, and in accordance with the TFN Guidelines issued by the OAIC. We do not use TFNs for any purpose other than enabling the compliance features of the platform. Other sensitive financial and compliance data may also be used to provide insights and analytics about your own business or, where you are acting on behalf of clients, about your clients' businesses, or in anonymised or aggregated form — meaning no individual or business can be identified — to improve our services, develop new services, and for industry analysis and other platform purposes.</p>
          <p>As the subscriber, you are responsible for ensuring that you have obtained all necessary consents from your employees, clients, suppliers, or contractors before entering their personal information into AiCounting, and for complying with your own obligations under the Privacy Act 1988 and other applicable Australian privacy and tax laws as the controller of that information. This applies regardless of which module you are using.</p>
        </Section>

        {/* 8 */}
        <Section heading="8. Data storage and security">
          <p>Your data is stored on servers hosted by Amazon Web Services (AWS) in Australia. We implement appropriate technical and organisational security measures to protect personal information against unauthorised access, loss, misuse, or disclosure.</p>
          <p>These measures include encryption of data in transit and at rest, access controls and authentication requirements, audit logging of system access, and regular security monitoring.</p>
          <p>While we take reasonable steps to protect your personal information, no method of electronic storage is completely secure. We cannot guarantee absolute security and are not liable for unauthorised access that occurs despite our reasonable security measures.</p>
          <p>If we become aware of a data breach that is likely to result in serious harm to affected individuals, we will notify the affected subscribers and the Office of the Australian Information Commissioner (OAIC) in accordance with our obligations under the Notifiable Data Breaches scheme.</p>
        </Section>

        {/* 9 */}
        <Section heading="9. International access">
          <p>Certain data processed through AiCounting for ATO lodgements and compliance purposes is subject to Australian data residency requirements and remains stored in Australia at all times.</p>
          <p>Where members of our team are located outside Australia, they may remotely access data stored on our servers in the course of providing our services. We take reasonable steps to ensure your information is handled in accordance with Australian privacy standards.</p>
          <p>By using AiCounting, you consent to your personal information being handled as described in this statement, including being remotely accessed by members of our team who may be located outside Australia.</p>
        </Section>

        {/* 10 */}
        <Section heading="10. Data retention">
          <p>We retain your personal information for as long as your account is active. Following termination, your access to the platform ends immediately. We will use reasonable efforts to assist with data export requests made as soon as possible after termination, though we cannot guarantee how long data remains available. We recommend keeping your own regular backups while your subscription is active. You remain responsible for your own record-keeping obligations under applicable law.</p>
          <p>You may request deletion of your personal information at any time by contacting us. We will action deletion requests within a reasonable timeframe.</p>
        </Section>

        {/* 11 */}
        <Section heading="11. Your rights">
          <p>Under the Privacy Act 1988 and the Australian Privacy Principles, you have the following rights in relation to your personal information:</p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li><strong>Access:</strong> you may request a copy of the personal information we hold about you.</li>
            <li><strong>Correction:</strong> you may request that we correct personal information that is inaccurate, out of date, incomplete, or misleading.</li>
            <li><strong>Complaint:</strong> you may lodge a complaint with us if you believe we have mishandled your personal information.</li>
            <li><strong>Deletion:</strong> you may request deletion of your personal information at any time. See Section 10 for your own record-keeping responsibilities.</li>
            <li><strong>Opt-out of marketing:</strong> you may opt out of receiving marketing communications at any time by following the unsubscribe instructions in any marketing email, or by contacting us directly.</li>
          </ul>
          <p>To exercise any of these rights, contact us at <a href="mailto:support@aicounting.com.au" className="text-primary underline">support@aicounting.com.au</a>. We will respond to requests within 30 calendar days. If we are unable to action your request, we will explain why.</p>
          <p>If you are not satisfied with our response to a privacy complaint, you may escalate your complaint to the Office of the Australian Information Commissioner (OAIC) at <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-primary underline">oaic.gov.au</a> or by calling 1300 363 992.</p>
        </Section>

        {/* 12 */}
        <Section heading="12. Cookies and tracking">
          <p>AiCounting uses cookies and similar tracking technologies to operate and improve the platform. These include session cookies required for platform functionality and analytics cookies that help us understand how users interact with the platform.</p>
          <p>You may disable cookies through your browser settings, but doing so may affect the functionality of the platform. We do not use cookies for third-party advertising purposes.</p>
        </Section>

        {/* 13 */}
        <Section heading="13. Links to third-party services">
          <p>The AiCounting platform may contain links to or integrations with third-party services. This Privacy Statement does not apply to those third-party services. We encourage you to review the privacy policies of any third-party service you use in connection with AiCounting.</p>
        </Section>

        {/* 14 */}
        <Section heading="14. Updates to this statement">
          <p>We may update this Privacy Statement from time to time. Where we make a material change, we will notify you by email or through the platform at least 30 calendar days before the change takes effect. The date of the most recent update is shown at the top of this document.</p>
          <p>Your continued use of AiCounting after a notified change takes effect constitutes acceptance of the updated statement.</p>
        </Section>

        {/* 15 */}
        <Section heading="15. How to contact us">
          <p>For any questions, requests, or complaints relating to this Privacy Statement or how we handle your personal information, please contact:</p>
          <p>
            <strong>AiFin PTY LTD</strong><br />
            ACN 637 599 154<br />
            <a href="mailto:support@aicounting.com.au" className="text-primary underline">support@aicounting.com.au</a>
          </p>
          <p>This statement supersedes any prior privacy notices. Effective date: 30 June 2026.</p>
        </Section>

        {/* Print */}
        <div className="text-center mt-10">
          <button
            onClick={() => window.print()}
            className="px-7 py-2.5 bg-accent text-white rounded-lg text-sm font-semibold hover:bg-accent/90 transition-colors print:hidden"
          >
            Print Statement
          </button>
        </div>

        {/* Footer */}
        <div className="mt-10 pt-4 border-t border-gray-100 text-center text-xs text-gray-400">
          Privacy Statement &nbsp;|&nbsp; AiFin PTY LTD (ACN 637 599 154) &nbsp;|&nbsp; Effective date: 30 June 2026
        </div>

      </div>
    </div>
  );
};

const Section = ({ heading, children }: { heading: string; children: React.ReactNode }) => (
  <div className="mb-8">
    <h2 className="font-heading text-sm font-bold text-[#d12043] uppercase tracking-wide mb-3">
      {heading}
    </h2>
    <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
      {children}
    </div>
  </div>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="font-heading text-sm font-bold text-primary mt-4 mb-1">
    {children}
  </h3>
);

export default Privacy;
