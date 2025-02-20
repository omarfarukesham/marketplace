import STATIC_PAGE_BG from '@/app/_assets/bg-static-page.jpg';
import { merge } from '@/app/_lib/merge';
import Image from 'next/image';
import { ReactNode } from 'react';

function TermsConditions() {
  return (
    // <main className='mx-2.5 md:mx-10 mb-16 grid gap-10 bg-success'>
    <main className='relative border-t-[1px] border-secondary-500 bg-[#fffaee] bg-cover bg-center bg-no-repeat pb-10'>
      <div className='absolute left-0 top-0 h-[610px] w-full'>
        <Image src={STATIC_PAGE_BG} alt='Privacy Policy' fill quality={100} className='h-full w-full' />
      </div>
      <div className='relative z-1'>
        <h1 className='pt-10 text-center text-3xl font-extrabold uppercase text-black'>Privacy Policy</h1>
        <div className='grid justify-center pb-10 pt-5'>
          <p className='max-w-5xl px-2 text-center text-black'>
            Welcome to the alipo.com powered by Alipo Limited. We respect your privacy and want to protect your personal
            information.
          </p>
        </div>
        <div className='mx-0 grid gap-4 rounded bg-white p-3 sm:mx-8 md:mx-8 md:p-4 lg:mx-40 lg:p-8'>
          <h3 className='pt-3 font-bold text-black' id='bullet-01'>
            Index
          </h3>
          <div className='ml-5'>
            <ul className='list-outside list-disc'>
              <ListItem className='text-highlight'>
                <a href='#title-01'>Alipo shall collect the following information where you are a buyer</a>
              </ListItem>
              <ListItem className='text-highlight'>
                <a href='#title-02'>Alipo shall collect the following information where you are a seller</a>
              </ListItem>
              <ListItem className='text-highlight'>
                <a href='#title-03'>Other uses of your Personal Information</a>
              </ListItem>
              <ListItem className='text-highlight'>
                <a href='#title-04'>Competitions</a>
              </ListItem>
              <ListItem className='text-highlight'>
                <a href='#title-05'>Third Parties and Links</a>
              </ListItem>
              <ListItem className='text-highlight'>
                <a href='#title-06'>Cookies</a>
              </ListItem>
              <ListItem className='text-highlight'>
                <a href='#title-07'>Security</a>
              </ListItem>
              <ListItem className='text-highlight'>
                <a href='#title-08'>Your rights</a>
              </ListItem>
            </ul>
          </div>

          <h3 className='pt-3 font-bold text-black'>To learn more, please read this Privacy Policy.</h3>

          <div className='pt-3'>
            <div className='ml-5'>
              <ol className='list-outside list-decimal'>
                <ListItem>
                  This Privacy Policy explains how we collect, use, and (under certain conditions) disclose your
                  personal information. This Privacy Policy also explains the steps we have taken to secure your
                  personal information. Finally, this Privacy Policy explains your options regarding the collection,
                  use, and disclosure of your personal information. By visiting the Site directly or through another
                  site, you accept the practices described in this Policy.
                </ListItem>
                <ListItem>
                  Data protection is a matter of trust and your privacy is important to us. We shall therefore only use
                  your name and other information which relates to you in the manner set out in this Privacy Policy. We
                  will only collect information where we must do so and we will only collect information if it is
                  relevant to our dealings with you.
                </ListItem>
                <ListItem>
                  We will only keep your information for as long as we are either required to by law or as is relevant
                  for the purposes for which it was collected.
                </ListItem>
                <ListItem>
                  We will cease to retain your personal data or remove how the data can be associated with you, as soon
                  as it is reasonable to assume that such retention no longer serves the purposes for which the personal
                  data was collected, and is no longer necessary for any legal or business purpose.
                </ListItem>
                <ListItem>
                  You can visit the Site and browse without having to provide personal details. During your visit to the
                  Site you remain anonymous and at no time can we identify you unless you have an account on the Site
                  and log on with your user name and password.
                </ListItem>
                <ListItem>
                  Data that we collect
                  <div className='ml-5 mt-4'>
                    <ul className='list-outside list-disc'>
                      <ListItem>
                        We may collect various pieces of information if you seek to place an order for a product with us
                        on the Site.
                      </ListItem>
                      <ListItem>
                        We collect, store and process your data for processing your purchase on the Site and any
                        possible later claims, and to provide you with our services. We may collect personal information
                        including, but not limited to, your title, name, gender, date of birth, email address, postal
                        address, delivery address (if different), telephone number, mobile number, fax number, payment
                        details, payment card details or bank account details.
                      </ListItem>
                    </ul>
                  </div>
                  <h3 className='pb-6 pt-3 font-bold text-black' id='title-01'>
                    Alipo shall collect the following information where you are a buyer:
                  </h3>
                  <div className='ml-5'>
                    <ul className='list-outside list-disc'>
                      <ListItem>Identity data, such as your name, gender, profile picture, and date of birth;</ListItem>
                      <ListItem>
                        Contact data, such as billing address, delivery address/location, email address, and phone
                        numbers;
                      </ListItem>
                      <ListItem>
                        Biometric data, such as voice files and face recognition when you use our voice search function,
                        and your facial features when you use the Site;
                      </ListItem>
                      <ListItem>
                        Billing account information: bank account details, credit card account, and payment information
                        (such account data may also be collected directly by our affiliates and/or third-party payment
                        service providers);
                      </ListItem>
                      <ListItem>
                        Transaction records/data, such as details about orders and payments, user clicks, and other
                        details of products and Services related to you;
                      </ListItem>
                      <ListItem>
                        Technical data, such as Internet protocol (IP) address, your login data, browser type and
                        version, time zone setting, and location, device information, browser plug-in types and
                        versions, operating system, and platform, international mobile equipment identity, device
                        identifier, IMEI, MAC address, cookies (where applicable) and other information and technology
                        on the devices you use to access the Site;
                      </ListItem>
                      <ListItem>
                        Profile data, such as your username and password, account settings, orders related to you, user
                        research, your interests, preferences, feedback and survey responses;
                      </ListItem>
                      <ListItem>
                        Usage data, such as information on how you use the Site, products and Services or view any
                        content on the Site, including the time spent on the Site, items and data searched for on the
                        Site, access times and dates, as well as websites you were visiting before you came to the Site
                        and other similar statistics;
                      </ListItem>
                      <ListItem>
                        Location data, such as when you capture and share your location with us in the form of
                        photographs or videos and upload such content to the Site;
                      </ListItem>
                      <ListItem>
                        Marketing and communications data, such as your preferences in receiving marketing from us and
                        our third parties, your communication preferences, and your chat, email or call history on the
                        Site or with third-party customer service providers;
                      </ListItem>
                      <ListItem>
                        Additional information we may request you to submit for due diligence checks or required by
                        relevant authorities as required for identity verification (such as copies of government-issued
                        identification, e.g. passport, ID cards, etc.) or if we believe you are violating our Privacy
                        Policy or our Customer Terms and Conditions.
                      </ListItem>
                    </ul>
                  </div>
                  <h3 className='pb-6 pt-3 font-bold text-black' id='title-02'>
                    Alipo shall collect the following information where you are a seller:
                  </h3>
                  <div className='ml-5'>
                    <ul className='list-outside list-disc'>
                      <ListItem>
                        Identity and contact data, such as your name, date of birth or incorporation, company name,
                        address, email address, phone number and other business-related information (e.g. company
                        registration number, business license, tax information, shareholder and director information,
                        etc.);
                      </ListItem>
                      <ListItem>
                        Account data, such as bank account details, bank statements, credit card details, and payment
                        details (such account data may also be collected directly by our affiliates and/or third-party
                        payment service providers);
                      </ListItem>
                      <ListItem>
                        Transaction data, such as details about orders and payments, and other details of products and
                        Services related to you;
                      </ListItem>
                      <ListItem>
                        Technical data, such as Internet protocol (IP) address, your login data, browser type and
                        version, time zone setting and location, browser plug-in types and versions, operating system
                        and platform, international mobile equipment identity, device identifier, IMEI, MAC address,
                        cookies (where applicable) and other information and technology on the devices you use to access
                        the Site;
                      </ListItem>
                      <ListItem>
                        Profile data, such as your username and password, orders related to you, your interests,
                        preferences, feedback and survey responses;
                      </ListItem>
                      <ListItem>
                        Usage data, such as information on how you use the Site, products and Services or view any
                        content on the Site, including the time spent on the Site, items and data searched for on the
                        Site, access times and dates, as well as websites you were visiting before you came to the Site
                        and other similar statistics;
                      </ListItem>
                      <ListItem>
                        Location data, such as when you capture and share your location with us in the form of
                        photographs or videos and upload such content to the Site;
                      </ListItem>
                      <ListItem>
                        Marketing and communications data, such as your preferences in receiving marketing from us and
                        our third parties and your communication preferences and your chat, email or call history on the
                        Site or with our third-party seller service providers;
                      </ListItem>
                      <ListItem>
                        Additional information we may request you to submit for authentication (such as copies of
                        government-issued identification, e.g. passport, ID cards, etc.) or if we believe you are
                        violating our Privacy Policy or our Terms of Use.
                      </ListItem>
                    </ul>
                  </div>
                </ListItem>

                <ListItem>
                  Further, we will use the information you provide to administer your account with us; verify and carry
                  out financial transactions in relation to payments you make; audit the downloading of data from our
                  website; improve the layout and/or content of the pages of our website and customize them for users;
                  identify visitors on our website; carry out research on our users&apos; demographics; send you
                  information we think you may find useful or which you have requested from us, including information
                  about our products and services, provided you have indicated that you have not objected to being
                  contacted for these purposes.
                </ListItem>
                <ListItem>
                  Subject to obtaining your consent we may contact you by email with details of other products and
                  services. You may unsubscribe from receiving marketing information at any time in our mobile
                  application settings or by using the unsubscribe function within the electronic marketing material. We
                  may use your contact information to send newsletters from us and from our related companies. If you
                  prefer not to receive any marketing communications from us, you can opt out at any time.
                </ListItem>
                <ListItem>
                  We may pass your name and address on to a third party in order to make delivery of the product to you
                  (for example to our courier or supplier). You must only submit to us the Site information which is
                  accurate and not misleading and you must keep it up to date and are responsible for informing us of
                  changes to your personal data, or in the event you believe that the personal data we have about you is
                  inaccurate, incomplete, misleading or out of date. inform us of changes. You can update your personal
                  data anytime by accessing your account on the Site.
                </ListItem>
                <ListItem>
                  Your actual order details may be stored with us but for security reasons cannot be retrieved directly
                  by us. However, you may access this information by logging into your account on the Site. Here you can
                  view the details of your orders that have been completed, those that are open, and those that are
                  shortly to be dispatched and administer your address details, bank details ( for refund purposes), and
                  any newsletter to which you may have subscribed. You undertake to treat the personal access data
                  confidentially and not make it available to unauthorized third parties. We cannot assume any liability
                  for misuse of passwords unless this misuse is our fault.
                </ListItem>
                <h3 className='ml-[-25px] pb-6 pt-3 font-bold text-black' id='title-03'>
                  Other uses of your Personal Information
                </h3>
                <ListItem>
                  We may use your personal information for opinion and market research. Your details are anonymous and
                  will only be used for statistical purposes. You can choose to opt out of this at any time. Any answers
                  to surveys or opinion polls we may ask you to complete will not be forwarded on to third parties.
                  Disclosing your email address is only necessary if you would like to take part in competitions. We
                  save the answers to our surveys separately from your email address.
                </ListItem>
                <ListItem>
                  We may also send you other information about us, the Site, our other websites, our products, sales
                  promotions, our newsletters, and anything relating to other companies in our group or our business
                  partners. If you would prefer not to receive any of this additional information as detailed in this
                  paragraph (or any part of it) please click the &apos;unsubscribe&apos; link in any email that we send
                  to you. Within 7 working days (days which are neither (i) a Sunday, nor (ii) a public holiday anywhere
                  in Bangladesh) of receipt of your instruction we will cease to send you information as requested. If
                  your instruction is unclear we will contact you for clarification.
                </ListItem>
                <ListItem>
                  We may further anonymize data about users of the Site generally and use it for various purposes,
                  including ascertaining the general location of the users and usage of certain aspects of the Site or a
                  link contained in an email to those registered to receive them and supplying that anonymized data to
                  third parties such as publishers. However, that anonymized data will not be capable of identifying you
                  personally.
                </ListItem>
                <h3 className='ml-[-25px] pb-6 pt-3 font-bold text-black' id='title-04'>
                  Competitions
                </h3>
                <ListItem>
                  For any competition, we use the data to notify winners and advertise our offers. You can find more
                  details where applicable in our participation terms for the respective competition.
                </ListItem>
                <h3 className='ml-[-25px] pb-6 pt-3 font-bold text-black' id='title-05'>
                  Third Parties and Links
                </h3>
                <ListItem>
                  We may pass your details to other companies in our group. We may also pass your details to our agents
                  and subcontractors to help us with any of our uses of your data set out in our Privacy Policy. For
                  example, we may use third parties to assist us with delivering products to you, to help us to collect
                  payments from you, to analyze data, and to provide us with marketing or customer service assistance.
                  We may also exchange information with third parties for the purposes of fraud protection and credit
                  risk reduction.
                </ListItem>
                <ListItem>
                  We may share (or permit the sharing of) your personal data with and/or transfer your personal data to
                  third parties and/or our affiliates for the above-mentioned purposes. These third parties and
                  affiliates, which may be located inside or outside your jurisdiction, include but are not limited to:
                  <div className='ml-5 mt-5'>
                    <ul className='list-outside list-disc'>
                      <ListItem>
                        Service providers (such as agents, vendors, contractors, and partners) in areas such as payment
                        services, logistics and shipping, marketing, data analytics, market or consumer research,
                        surveys, social media, customer service, installation services, information technology, and
                        website hosting;
                      </ListItem>
                      <ListItem>Their service providers and related companies;</ListItem>
                      <ListItem>Other users of the Site.</ListItem>
                    </ul>
                  </div>
                </ListItem>
                <ListItem>
                  We may transfer our databases containing your personal information if we sell our business or part of
                  it, provided that we satisfy the requirements of applicable data protection law when disclosing your
                  personal data. Other than as set out in this Privacy Policy, we shall NOT sell or disclose your
                  personal data to third parties without obtaining your prior consent unless this is necessary for the
                  purposes set out in this Privacy Policy or unless we are required to do so by law. The Site may
                  contain advertising of third parties and links to other sites or frames of other sites. Please be
                  aware that we are not responsible for the privacy practices or content of those third parties or other
                  sites, nor for any third party to whom we transfer your data in accordance with our Privacy Policy.
                  You are advised to check on the applicable privacy policies of those websites to determine how they
                  will handle any information they collect from you.
                </ListItem>
                <ListItem>
                  In disclosing your personal data to third parties, we endeavor to ensure that the third parties and
                  our affiliates keep your personal data secure from unauthorized access, collection, use, disclosure,
                  processing or similar risks and retain your personal data only for as long as your personal data helps
                  with any of the uses of your data as set out in our Privacy Policy.
                </ListItem>
                <ListItem>
                  We may transfer or permit the transfer of your personal data outside of Bangladesh for any of the
                  purposes set out in this Privacy Policy. However, we will not transfer or permit any of your personal
                  data to be transferred outside of Bangladesh unless the transfer is in compliance with applicable laws
                  and this Privacy Policy.
                </ListItem>
                <ListItem>
                  We may share your personal data with our third-party service providers or affiliates (e.g. payment
                  service providers) in order for them to offer services to you other than those related to your use of
                  the Site. Your acceptance and use of the third-party service provider’s or our affiliate’s services
                  shall be subject to terms and conditions as may be agreed between you and the third-party service
                  provider or our affiliate. Upon your acceptance of the third-party service provider’s or our
                  affiliate’s service offering, the collection, use, disclosure, storage, transfer, and processing of
                  your data (including your personal data and any data disclosed by us to such third-party service
                  provider or affiliate) shall be subject to the applicable privacy policy of the third-party service
                  provider or our affiliate, which shall be the data controller of such data. You agree that any queries
                  or complaints relating to your acceptance or use of the third-party service provider’s or our
                  affiliate’s services shall be directed to the party named in the applicable privacy policy.
                </ListItem>
                <h3 className='ml-[-25px] pb-6 pt-3 font-bold text-black' id='title-06'>
                  Cookies
                </h3>
                <ListItem>
                  We or our authorised service providers may use cookies, web beacons, and other similar technologies in
                  connection with your use of the Site.
                </ListItem>
                <ListItem>
                  The acceptance of cookies is not a requirement for visiting the Site. However, we would like to point
                  out that the use of the &apos;basket&apos; functionality on the Site and ordering is only possible
                  with the activation of cookies. Cookies are small text files (typically made up of letters and
                  numbers) placed in the memory of your browser or device when you visit a website or view a message.
                  They allow us to recognize a particular device or browser. Web beacons are small graphic images that
                  may be included on the Site. They allow us to count users who have viewed these pages so that we can
                  better understand your preferences and interests. Cookies are tiny text files that identify your
                  computer to our server as a unique user when you visit certain pages on the Site and they are stored
                  by your Internet browser on your computer&apos;s hard drive. Cookies can be used to recognize your
                  Internet Protocol address, saving you time while you are on, or want to enter the Site. We only use
                  cookies for your convenience in using the Site (for example to remember who you are when you want to
                  amend your shopping cart without having to re-enter your email address) and not for obtaining or using
                  any other information about you (for example targeted advertising). However, certain cookies are
                  required to enable core functionality (such as adding items to your shopping basket), so please note
                  that changing and deleting cookies may affect the functionality available on the Sit. Your browser can
                  be set to not accept cookies, but this would restrict your use of the Site. Please accept our
                  assurance that our use of cookies does not contain any personal or private details and is free from
                  viruses. If you want to find out more information about cookies, go to all-about-cookies or to find
                  out about removing them from your browser,
                </ListItem>
                <ListItem>
                  This website uses Google Analytics, a web analytics service provided by Google, Inc.
                  (&quot;Google&quot;). Google Analytics uses cookies, which are text files placed on your computer, to
                  help the website analyze how users use the site. The information generated by the cookie about your
                  use of the website (including your IP address) will be transmitted to and stored by Google on servers
                  in the United States. Google will use this information for the purpose of evaluating your use of the
                  website, compiling reports on website activity for website operators, and providing other services
                  relating to website activity and internet usage. Google may also transfer this information to third
                  parties where required to do so by law, or where such third parties process the information on
                  Google&apos;s behalf. Google will not associate your IP address with any other data held by Google.
                  You may refuse the use of cookies by selecting the appropriate settings on your browser, however,
                  please note that if you do this you may not be able to use the full functionality of this website. By
                  using this website, you consent to the processing of data about you by Google in the manner and for
                  the purposes set out above.
                </ListItem>
                <h3 className='ml-[-25px] pb-6 pt-3 font-bold text-black' id='title-07'>
                  Security
                </h3>
                <ListItem>
                  We have in place appropriate technical and security measures to prevent unauthorized or unlawful
                  access to or accidental loss of or destruction or damage to your information. When we collect data
                  through the Site, we collect your personal details on a secure server. We use firewalls on our
                  servers. Our security procedures mean that we may occasionally request proof of identity before we
                  disclose personal information to you. You are responsible for protecting against unauthorized access
                  to your password and to your computer.
                </ListItem>
                <ListItem>
                  You should be aware, however, that no method of transmission over the Internet or method of electronic
                  storage is completely secure. While security cannot be guaranteed, we strive to protect the security
                  of your information and are constantly reviewing and enhancing our information security measures.
                </ListItem>
                <h3 className='ml-[-25px] pb-6 pt-3 font-bold text-black' id='title-08'>
                  Your rights
                </h3>
                <ListItem>
                  If you are concerned about your data, you have the right to request access to the personal data that
                  we may hold or process about you. You have the right to require us to correct any inaccuracies in your
                  data free of charge. At any stage, you also have the right to ask us to stop using your personal data
                  for direct marketing purposes. Where permitted by applicable data protection laws, we reserve the
                  right to charge a reasonable administrative fee for retrieving your personal data records. If so, we
                  will inform you of the fee before processing your request. You may communicate the withdrawal of your
                  consent to the continued use, disclosure, storing and/or processing of your personal data by
                  contacting our customer services, subject to the conditions and/or limitations imposed by applicable
                  laws or regulations. Please note that if you communicate your withdrawal of your consent to our use,
                  disclosure, storing or processing of your personal data for the purposes and in the manner as stated
                  above or exercise your other rights as available under applicable local laws, we may not be in a
                  position to continue to provide the Services to you or perform any contract we have with you, and we
                  will not be liable in the event that we do not continue to provide the Services to, or perform our
                  contract with you. Our legal rights and remedies are expressly reserved in such an event.
                </ListItem>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default TermsConditions;

const ListItem = ({ children, className }: { children: ReactNode; className?: string }) => {
  return <li className={merge('pb-3', className)}>{children}</li>;
};
