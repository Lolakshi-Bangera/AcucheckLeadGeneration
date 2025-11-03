import Image from "next/image";

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-50 w-[100%]">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/pp_bg.png"
          alt="Background"
          fill
          style={{ objectFit: "contain" }}
          quality={100}
        />
      </div>

      <div className="bg-white/90 rounded-xl shadow-lg p-8 md:p-12  w-full">
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 pb-5">
            Privacy Policy
          </h1>

          <div className="flex justify-between text-[16px] text-black font-extrabold">
            <div>Effective Date - 01/06/2025</div>
            <div>Last Updated - 01/06/2025</div>
          </div>
        </div>

        <p className="font-semibold mb-4">
          <strong>AcuFi</strong> is committed to protecting the privacy and
          security of our users. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you use our
          services, visit our website, or interact with us in any way.
        </p>
        <p className="mb-6 font-medium">
          By using our services, you agree to the terms of this Privacy Policy.
          If you do not agree with our policies and practices, please do not use
          our services.
        </p>

        <h2 className="font-bold text-lg mb-2">1. Information We Collect</h2>
        <p className="mb-3">
          We collect several types of information to provide and improve our
          services. This includes:
        </p>

        <h3 className="font-semibold mb-1">1.1 Personal Information</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>Full Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Mailing Address</li>
          <li>Social Security Number (where required for verification)</li>
          <li>Bank Account Details (hashed or masked where applicable)</li>
        </ul>

        <h3 className="font-semibold mb-1">1.2 Non-Personal Information</h3>
        <ul className="list-disc pl-6 mb-4">
          <li>IP Address</li>
          <li>Browser Type and Version</li>
          <li>Device Information</li>
          <li>Usage Data (e.g., pages visited, time spent on our platform)</li>
        </ul>

        <h3 className="font-semibold mb-1">1.3 Sensitive Information</h3>
        <p className="mb-2">
          For specific services (such as identity verification and fraud
          prevention), we may collect sensitive information like Social Security
          Numbers and Bank Account Numbers. We do not store fully unmasked
          account numbers and use industry-standard encryption and hashing
          techniques to protect your data.
        </p>
        <h2 className="font-bold text-lg mb-2">
          2.How We Use Your Information
        </h2>
        <p className="mb-3">
          We use the information collected for the following purposes:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <span className="font-medium">Identity Verification</span> - To
            verify your identity and prevent fraud.
          </li>
          <li>
            <span className="font-medium">Service Delivery</span> - To provide
            you with the requested services.
          </li>
          <li>
            <span className="font-medium">Security & Compliance</span> - To
            protect our platform, users, and businesses from unauthorised
            access, fraud, and abuse.
          </li>
          <li>
            <span className="font-medium">Communication</span> - To send
            important updates, security alerts, and service-related
            notifications.
          </li>
          <li>
            <span className="font-medium">Legal Obligations</span> - To comply
            with applicable laws, regulations, and legal processes.
          </li>
        </ul>

        {/* Section 3 */}
        <h2 className="font-bold text-lg mb-2">
          3. How We Protect Your Information
        </h2>
        <p className="mb-3">
          We implement a variety of security measures to protect your personal
          data, including:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <span className="font-medium">Encryption & Hashing</span> -
            Sensitive data, such as Social Security Numbers and Bank Account
            Numbers, are stored using secure encryption and hashing methods.
          </li>
          <li>
            <span className="font-medium">Access Controls</span> - Only
            authorised personnel have access to your personal information.
          </li>
          <li>
            <span className="font-medium">Regular Security Audits</span> - We
            routinely review and update our security protocols to address
            potential threats.
          </li>
        </ul>
        <p className="mb-6">
          Despite these measures, no method of transmission over the Internet is
          100% secure. While we strive to protect your data, we cannot guarantee
          absolute security.
        </p>

        {/* Section 4 */}
        <h2 className="font-bold text-lg mb-2">
          4. How We Share Your Information
        </h2>
        <p className="mb-3">
          We do not sell, trade, or rent your personal information to third
          parties. However, we may share your information in the following
          circumstances:
        </p>
        <h3 className="font-semibold mb-1">4.1 With Your Consent</h3>
        <p className="mb-3">
          We will share your information only when you explicitly consent to it.
        </p>
        <h3 className="font-semibold mb-1">
          4.2 For Legal and Compliance Reasons
        </h3>
        <p className="mb-3">
          We may disclose your information if required to do so by law, such as
          in response to a subpoena, court order, or government request.
        </p>
        <h3 className="font-semibold mb-1">4.3 With Service Providers</h3>
        <p>
          We work with third-party vendors to provide essential services such as
          data hosting, fraud detection, and identity verification. These
          providers are contractually obligated to keep your data secure and
          confidential.
        </p>
        <h2 className="font-bold text-lg mb-2">5. Your Rights & Choices</h2>
        <p className="mb-3">
          You have certain rights regarding your personal information:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <span className="font-medium">Access & Correction</span>
            <br />
            You may request a copy of the personal data we hold about you and
            correct any inaccuracies.
          </li>
          <li>
            <span className="font-medium">Data Deletion</span>
            <br />
            You may request that we delete your personal information, subject to
            legal and contractual obligations.
          </li>
          <li>
            <span className="font-medium">Opt-Out of Communications</span>
            <br />
            You can unsubscribe from marketing communications at any time.
          </li>
        </ul>
        <p className="mb-4">
          To exercise these rights, contact us at{" "}
          <a href="mailto:info@acufi.com" className="text-blue-700 underline">
            info@acufi.com
          </a>
        </p>

        <h2 className="font-bold text-lg mb-2">6. Data Retention</h2>
        <p className="mb-4">
          We retain your personal information only as long as necessary to
          fulfil the purposes outlined in this policy or as required by law.
          Once no longer needed, we securely delete or anonymise your data.
        </p>

        <h2 className="font-bold text-lg mb-2">
          7. Cookies & Tracking Technologies
        </h2>
        <p className="mb-4">
          We may use cookies and tracking technologies to enhance user
          experience and analyse usage patterns. You can adjust your browser
          settings to refuse cookies; however, this may impact the functionality
          of our services.
        </p>

        <h2 className="font-bold text-lg mb-2">
          8. International Data Transfers
        </h2>
        <p className="mb-4">
          If you are accessing our services from outside the United States,
          please be aware that your information may be transferred, stored, and
          processed in the U.S. or other jurisdictions with different data
          protection laws.
        </p>

        <h2 className="font-bold text-lg mb-2">
          9. Changes to This Privacy Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy periodically. Any changes made will
          be posted on this page with the last updated date at the top. If
          significant changes are made, we will notify you via email or through
          our platform.
        </p>

        <h2 className="font-bold text-lg mb-2">10. Contact Us</h2>
        <p className="mb-2">
          If you have any questions about this Privacy Policy, please contact
          us:
        </p>
        <ul className="mb-4 pl-2">
          <li>
            Email –{" "}
            <a href="mailto:info@acufi.com" className="text-blue-700 underline">
              info@acufi.com
            </a>
          </li>
          <li>Mailing Address – 4464 Sparks Blvd, Nevada, 89436</li>
        </ul>

        <h2 className="font-bold text-lg mb-2">11.</h2>
        <p className="mb-4">
          This Privacy Policy outlines the policies and procedures of AcuFi Pay
          (&quot;we&quot;, &quot;us&quot;, or &quot;AcuFi&quot;) regarding the collection, use, and disclosure
          of your information on AcuFi.com (the &quot;Site&quot;) and the services,
          applications, and features available through the site (collectively,
          the &quot;Services&quot;). We collect information about you from various
          sources, including your AcuFi user account or profile, your
          interactions with the Services, and third-party websites or services.
        </p>

        <h2 className="font-bold text-lg mb-2">12.</h2>
        <p className="mb-4">
          This Privacy Policy explains how AcuFi collects, processes, and
          protects Personal Data when you access and use our Services. &apos;Personal
          Data&apos; refers to any information that can identify an individual, while
          &apos;processing&apos; includes actions such as collection, use, storage, and
          disclosure of data.
        </p>

        <h3 className="font-semibold mb-1">Personal Data</h3>
        <p className="mb-2">
          <span className="font-medium">12.1</span> This Privacy Policy also
          governs AcuFi&apos;s handling of Personal Data shared between AcuFi and its
          business partners. However, it does not extend to the practices of
          third parties, including their websites, services, or applications
          that AcuFi does not own or control, nor to individuals AcuFi does not
          employ or manage (&quot;Third Parties&quot;). While we strive to collaborate
          with Third Parties that uphold similar privacy standards, we cannot be
          responsible for their content, actions, or privacy policies. We
          strongly encourage you to review the privacy policies of any Third
          Parties you interact with to understand how your data is handled.
        </p>
        <p className="mb-2">
          <span className="font-medium">12.2</span> We collect Personal Data
          about you in the following ways:
          <br />
          When you provide it directly to us, when our business partners or
          service providers share it with us, or when it is automatically
          collected as you use our Services.
        </p>
        <p className="mb-2">
          <span className="font-medium">12.3</span> Information we collect
          directly from you:
          <br />
          We receive Personal Data directly from you when you provide us with
          such Personal Data, including without limitation the following:
        </p>

        <ul className="list-disc pl-6 mb-4">
          <li>First and last name</li>
          <li>Email address</li>
          <li>Mailing address</li>
          <li>Telephone number</li>
          <li>Age/birthday</li>
          <li>Company name and job title</li>
        </ul>

        <h2 className="font-bold text-lg mb-2">Public Website</h2>
        <p className="mb-2">
          <span className="font-medium">13.1</span> When you visit our website,
          we collect certain information about you based on your interactions
          with our site. The type of information we receive and collect depends
          on your activities. You may enhance your experience by providing us
          with details about yourself, such as when applying for products,
          making inquiries, or requesting additional information about a product
          or service. When you request information, we may ask for your name and
          other personal details or obtain such data from third parties.
          Providing this information is entirely voluntary.
        </p>

        <p className="mb-2">
          <span className="font-medium">13.2</span> We, along with our
          third-party service providers, may use this information for various
          purposes, including enhancing our ability to fulfil your requests and
          inquiries, monitoring website usage and performance, improving user
          experience, ensuring compatibility with your device, protecting
          against fraud or identity theft, and conducting aggregate analyses of
          usage patterns.
        </p>
        <p className="mb-2">
          <span className="font-medium">13.3</span> If you provide us with
          information about another person, you confirm that you have obtained
          their consent to share their personal data with us. You also
          acknowledge that you have informed them about how we are and how we
          will process their information, as outlined in this Privacy Policy.
        </p>

        <h2 className="font-bold text-lg mb-2">
          Application Process and Non-Public Websites
        </h2>
        <p className="mb-2">
          <span className="font-medium">14.1</span> At times, you may be
          required to provide us with certain personal information, such as your
          date of birth and address, which may be protected under applicable
          data privacy laws. By completing the application process and/or using
          our non-public websites, you consent to our processing and disclosure
          of this information to our affiliated companies and third-party
          service providers for their processing. We and our partners will use
          your personal information only for purposes necessary to fulfil our
          obligations under your customer agreement and to comply with
          applicable laws and regulations. These purposes may include due
          diligence, anti-money laundering verifications, &apos;Know Your Customer&apos;
          (KYC) confirmations, and marketing activities.
        </p>

        <p className="mb-2">
          <span className="font-medium">14.2</span> For our customers, details
          regarding the disclosure, transfer, and processing of personal data as
          part of our services are outlined in the documentation provided during
          the onboarding process. These matters fall outside the scope of this
          Privacy Policy, which applies solely to information collected through
          this website.
        </p>

        <h2 className="font-bold text-lg mb-2">
          How and With Whom Do We Share Your Data?
        </h2>
        <p className="mb-2">
          <span className="font-medium">15.1</span> We share Personal Data with
          vendors, third-party service providers, and agents who assist us in
          delivering services aligned with the purposes outlined in this Privacy
          Policy or our Terms of Service. These partners include:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Payment processors</li>
          <li>Fraud prevention service providers</li>
          <li>Analytics service providers</li>
          <li>Hosting service providers</li>
          <li>Marketing service providers</li>
          <li>Staff augmentation and contract personnel</li>
          <li>Co-location service providers</li>
          <li>Telecommunications service providers</li>
        </ul>
        <p className="mb-4">
          These entities process Personal Data on our behalf to support our
          operations and enhance our services.
        </p>
        <p className="mb-2">
          <span className="font-medium">15.2</span> We also share personal data
          when necessary to complete a transaction initiated or authorised by
          you or to provide a product or service you have requested. In addition
          to the partners mentioned above, these recipients may include:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Other users – When you post information publicly or as required to
            complete a transaction you initiated through the Services.
          </li>
          <li>
            Social media services – If you engage with them while using our
            Services.
          </li>
          <li>
            Third-party business partners – Including vendors you access through
            our Services.
          </li>
          <li>Other authorised parties – As explicitly approved by you.</li>
        </ul>
        <p>
          This data sharing ensures seamless delivery of our services and the
          fulfilment of your requests.
        </p>
        <p className="mb-2 mt-2">
          <span className="font-medium">15.3</span> We also share Personal Data
          when we believe it is necessary to:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            Comply with applicable laws or respond to valid legal processes,
            including requests from law enforcement or government agencies.
          </li>
          <li>
            Protect our business, users, and platform by enforcing our Terms of
            Service, preventing spam or other unwanted communications, and
            investigating or defending against fraud. This may include
            exchanging information with other companies and organisations for
            fraud prevention and credit risk reduction.
          </li>
          <li>
            Ensure the security of our products and services by detecting,
            preventing, and addressing security threats.
          </li>
        </ul>
        <p className="mb-2">
          <span className="font-medium">15.4</span> As part of our Services, you
          may receive emails and other communications from AcuFi. By using our
          Services, you acknowledge and agree that AcuFi may send you
          communications, at its sole discretion, that are relevant to your use
          of the Services.
        </p>
        <p className="mb-2">
          <span className="font-medium">15.5</span> We also share information
          with third parties when you provide your consent. Additionally, in the
          event of a business transaction such as the purchase or sale of
          assets, user information is typically among the transferred assets. If
          AcuFi or substantially all of its assets are acquired, or in the event
          of bankruptcy or business closure, user information may be transferred
          to or acquired by a third party. You acknowledge that such transfers
          may occur, and that any acquiring entity may continue to use your
          personal data in accordance with this Privacy Policy.
        </p>
        <p className="mb-2">
          <span className="font-medium">15.6</span> AcuFi may collaborate with
          affiliated businesses to co-promote content or services and may share
          your personal data with these affiliates.
        </p>

        <h2 className="font-bold text-lg mb-2">
          16. How Long Do We Retain Your Personal Data?
        </h2>
        <p className="mb-4">
          We retain your personal data for as long as your account remains open
          or as necessary to provide you with our Services. In some instances,
          we may retain personal data for longer periods if required to comply
          with legal obligations, resolve disputes, collect outstanding fees, or
          as otherwise permitted by applicable laws and regulations. After this
          period, we may retain certain information in a depersonalised or
          aggregated form that does not personally identify you.
        </p>

        <h2 className="font-bold text-lg mb-2">
          17. What Security Measures Do We Use?
        </h2>
        <p className="mb-4">
          We implement appropriate technical and organisational measures to
          protect Personal Data, considering the nature of the data and the
          applicable processing activities. For example, all personal data is
          encrypted. To help safeguard your information, we encourage you to
          prevent unauthorised access to your account by choosing a strong
          password, protecting it appropriately, and signing off after accessing
          your account.
          <br />
          While AcuFi strives to keep user account information private and
          secure, we cannot guarantee absolute security. Unauthorised access,
          hardware or software failures and other unforeseen factors may
          compromise the security of user information at any time.
        </p>

        <h2 className="font-bold text-lg mb-2">
          18. Browsing data and cookies
        </h2>
        <p>
          This website uses cookies, the small text files stored on your device,
          to enhance your browsing experience. Cookies help retain user
          preferences, store information for features such as shopping carts,
          and provide anonymised tracking data to third-party applications like
          Google Analytics.
          <br />
          While cookies generally improve website functionality, you may choose
          to disable them. The most effective way to do so is by adjusting your
          browser settings. For guidance on managing cookies, consult your
          browse&apos;s Help section or visit the About Cookies website, which
          provides instructions for all major browsers.
        </p>
        <h2 className="font-bold text-lg mb-2 mt-2">Third-Party Cookies</h2>
        <p className="mb-2">
          <span className="font-medium">19.1</span> Our Services use cookies and
          similar technologies, including pixel tags, web beacons, clear GIFs,
          and JavaScript (collectively, &quot;Cookies&quot;), to recognise your web
          browser and track how and when you interact with our Site and
          Services. These technologies help us analyse trends, understand our
          user base, and enhance the functionality and performance of our
          Services.
        </p>
        <p className="mb-2">
          Cookies are small files, typically consisting of letters and numbers,
          that are placed on your computer, tablet, phone, or other device when
          you visit our site. In some cases, we may combine non-personal data
          collected through Cookies with personal data we have about you. For
          example, to identify you or determine whether you have an account with
          us. Additionally, we may supplement the information we collect from
          you with data received from third parties.
        </p>
        <p className="mb-2">
          <span className="font-medium">19.2</span> Cookies can be categorised
          as either session Cookies or persistent Cookies.{" "}
          <span className="text-blue-700 font-semibold">Session Cookies</span>{" "}
          are temporary and remain on your device only while you are visiting
          our Site or using our Services. In contrast, persistent Cookies remain
          stored on your device for a definite period after you leave our site
          or services. The duration of a persistent Cookie varies depending on
          its purpose.
        </p>
        <p>We use persistent Cookies to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Store your preferences for future visits.</li>
          <li>Track how often you visit and return to our Services.</li>
          <li>Analyse how your usage patterns change over time.</li>
          <li>Measure the effectiveness of our advertising efforts.</li>
        </ul>
        <p className="mb-4">
          Additionally, through these Cookies, we may collect information about
          your online activity even after you leave our Services.
        </p>
        <p className="mb-2">
          Your browser may offer a &quot;Do Not Track&quot; (DNT) option, which allows you
          to indicate that you do not wish to be tracked across websites.
          However, because we collect browsing data and persistent identifiers,
          our Services do not currently support DNT requests. This means we may
          continue to collect information about your online activity while you
          use our Services and after you leave.
        </p>
        <p className="mb-2">
          <span className="font-medium">19.3</span> Some Cookies are placed on
          your device by third parties and may collect information about your
          browsing habits, such as your visits to our Site or Services, the
          pages you have viewed, and the links or advertisements you have
          clicked. These Cookies can help determine whether certain third-party
          services are being used, identify your interests, retarget
          advertisements, and deliver ads that we or others believe may be
          relevant to you.
        </p>
        <p className="mb-4">
          Please note that we do not control third-party Cookies. Their
          placement and usage are subject to the privacy policies of the
          respective third parties.
        </p>

        <h2 className="font-bold text-lg mb-2">
          Transfer of personal information to third parties
        </h2>
        <p className="mb-2">
          <span className="font-medium">20.1</span> Your personal data may be
          disclosed to various recipients, including third parties engaged to
          support our business operations, subject to your consent where
          required by law. These third parties may include:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Distributors of our products and services.</li>
          <li>
            Service providers performing functions on our behalf, such as
            accounting, auditing, consulting, legal, and other professional
            services.
          </li>
          <li>Providers of additional business-related services.</li>
        </ul>
        <p>
          Certain aspects of our Services may be delivered by organisations with
          whom we have contractual agreements, including subcontractors. As a
          result, your personal data may be shared with these entities.
        </p>
        <br />
        <p>
          When personal data is shared with service providers for processing, we
          remain responsible for ensuring that your information continues to be
          protected with the same level of security and confidentiality as if we
          were handling it directly.
        </p>
        <p className="mb-2 mt-2">
          <span className="font-medium">20.2</span> We may also disclose your
          personal data to third parties in the following circumstances:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>
            <span className="font-medium">Business Transactions</span>
            <br />
            If we sell or buy any business or assets, we may share your Personal
            Data with the prospective buyer or seller as part of the
            transaction.
          </li>
          <li>
            <span className="font-medium">Acquisition or Merger</span>
            <br />
            If Acufi or substantially all of its assets are acquired by a third
            party, customer Personal Data will be among the transferred assets.
          </li>
          <li>
            <span className="font-medium">Legal Obligations</span>
            <br />
            If required to comply with a legal obligation, enforce this Privacy
            Policy or other agreements, or protect the rights, property, or
            safety of Acufi, our customers, or others. This may include sharing
            information with other organisations for fraud prevention and credit
            risk reduction.
          </li>
        </ul>
        <p className="mb-2">
          We store the personal data you provide on our website until the
          purpose for which it was collected has been fulfilled. If you no
          longer consent to the storage of your personal data or believe it was
          stored in error, we will delete, block, or correct your data as
          permitted by applicable law.
        </p>
        <p className="mb-4">
          Upon request, we can provide you with free information regarding the
          personal Data we have stored about you.
        </p>

        <h2 className="font-bold text-lg mb-2">Direct marketing</h2>
        <p className="mb-2">
          <span className="font-medium">21.1</span> Subject to your consent,
          where required by applicable law, we may use your personal data to
          send you direct marketing communications about our products and
          services, as well as those of our affiliates and third-party partners.
          We may also allow these affiliates and third parties to send their own
          direct marketing to you.
        </p>
        <p className="mb-2">
          Our direct marketing efforts may be conducted via email, telephone,
          postal mail, SMS, or any other relevant communication methods that may
          emerge. Additionally, we may provide direct marketing information and
          permit others to do so as authorised under our customer&apos;s respective
          contracts.
        </p>
        <p className="mb-4">
          <span className="font-medium">21.2</span> We take steps to ensure that
          any direct marketing communications sent electronically provide a
          simple and clear way for you to opt out in compliance with applicable
          laws. For example, our emails may include an &quot;unsubscribe&quot; link or an
          email address where you can send a request to stop further
          communications.
          <br />
          Your consent is required for direct marketing under applicable law,
          and if you choose to provide it, you will have the right to withdraw
          your consent at any time.
        </p>

        <h2 className="font-bold text-lg mb-2">
          Other websites and information security
        </h2>
        <p className="mb-2">
          <span className="font-medium">22.1</span> Websites linked to or from
          our website are governed by their own privacy policies, which may
          differ from ours. We encourage you to carefully review the privacy
          policies of these third-party websites before providing any personal
          data.
        </p>
        <p className="mb-4">
          We are not responsible for any losses or damages arising from the
          information, security, privacy practices, availability, content, or
          accuracy of materials on such third-party websites.
        </p>
        <p className="mb-4">
          <span className="font-medium">22.2</span> Please be aware that
          internet communications, such as emails, are not always secure. While
          we take measures to protect all confidential and personal information
          submitted through our website in compliance with applicable laws and
          regulations, we cannot guarantee the security of data transmitted over
          the Internet. Like all website operators, we acknowledge the inherent
          risks associated with online data transmission.
        </p>

        <h2 className="font-bold text-lg mb-2">23. Suspicious e-mail</h2>
        <p className="mb-4">
          We will never email you to request personal data over the Internet or
          through any other means. To protect yourself against online fraud,
          remain cautious of unsolicited emails requesting sensitive
          information. If you suspect a fraudulent email, please contact us
          immediately.
        </p>

        <h2 className="font-bold text-lg mb-2">
          24. Notice to Users Accessing This Website Outside the United States
        </h2>
        <p className="mb-2">
          If you are accessing this website from outside the United States,
          please be aware that your information may be transferred to, stored,
          and processed in the United States, where data protection laws may
          differ from those in your jurisdiction. By using our website, you
          acknowledge and consent to such transfers in accordance with our
          Privacy Policy.
        </p>
        <p className="mb-2">
          If you reside outside the United States, any information you provide
          through our website will be transferred to and processed in the U.S.
          If you do not wish your personal data to leave your country, please
          refrain from providing it to us.
        </p>
        <p className="mb-4">
          By submitting your personal data, you explicitly consent to its
          transfer, storage, and processing in the United States in accordance
          with our Privacy Policy.
        </p>

        <h2 className="font-bold text-lg mb-2">25. Use by minors</h2>
        <p className="mb-4">
          Our Services are not intended for individuals under the age of 18, and
          we request that they do not provide any personal data through the
          Services.
        </p>

        <h2 className="font-bold text-lg mb-2">
          26. Changes to our online privacy policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy periodically. It is your
          responsibility to review this policy regularly and stay informed about
          any changes. We encourage you to visit this page frequently, as your
          continued use of our website signifies your acceptance of the most
          recent version of this Privacy Policy.
        </p>

        <p className="font-bold text-base mt-4">
          If you have any questions or comments regarding our Privacy Policy,
          please contact us at{" "}
          <a href="mailto:info@acufi.com" className="text-blue-700 underline">
            info@acufi.com
          </a>
        </p>
      </div>
    </div>
  );
}
