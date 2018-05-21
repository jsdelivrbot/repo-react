//

import React from 'react';

import Outer from './Outer';
import Inner from './Inner';
import Anchor from '../tools/Anchor';

import { Title, Header } from './PrivacyStyles';

const Privacy = () => (
	<Outer>
		<Inner>
			<Title>Privacy Policy</Title>
			<p>
				Our Privacy Policy governs the privacy terms of our Website, located at{' '}
				<Anchor text="www.taskmuncher.com" href="https://www.taskmuncher.com" />
				. Any capitalized terms not defined in our Privacy Policy, have the meaning as specified in our Terms of
				Service.
			</p>

			<Header>Your Privacy</Header>
			<p>
				TaskMuncher follows all legal requirements to protect your privacy. Our Privacy Policy is a legal statement that
				explains how we may collect information from you, how we may share your information, and how you can limit our
				sharing of your information. You will see terms in our Privacy Policy that are capitalized. These terms have
				meanings as described in the Definitions section below.
			</p>

			<Header>Definitions</Header>
			<p>
				&quot;Non Personal Information&quot; is information that is not personally identifiable to you and that we
				automatically collect when you access our Website with a web browser. It may also include publicly available
				information that is shared between you and others. &quot;Personally Identifiable Information&quot; is non-public
				information that is personally identifiable to you and obtained in order for us to provide you within our
				Website. Personally Identifiable Information may include information such as your name, email address, and other
				related information that you provide to us or that we obtain about you.
			</p>

			<Header>Information We Collect</Header>
			<p>
				Generally, you control the amount and type of information you provide to us when using our Website. Any
				non-financial information provided when voluntarily registering for use of the Service, including, username and
				password and email address.
			</p>

			<Header>Cookies</Header>
			<p>
				Our Website uses &quot;Cookies&quot; to identify the areas of our Website that you have visited. A Cookie is a
				small piece of data stored on your computer or mobile device by your web browser. We use Cookies to personalize
				the Content that you see on our Website. Most web browsers can be set to disable the use of Cookies. However, if
				you disable Cookies, you may not be able to access functionality on our Website correctly or at all. We never
				place Personally Identifiable Information in Cookies.
			</p>

			<Header>Automatic Information</Header>
			<p>
				We automatically receive information from your web browser or mobile device. This information includes the IP
				address of your computer/proxy server that you use to access the Internet, your Internet Website provider name,
				web browser type, type of mobile device, and computer operating system. We use all of this information to
				analyze trends among our Users to help improve our Service.
			</p>

			<Header>How We Use Your Information</Header>
			<p>
				We use the information we receive from you as follows: - Customizing Our Website. We may use the Personally
				Identifiable information you provide to us along with any computer information we receive to customize our
				Website for better user experience. - Sharing Information with Affiliates and Other Third Parties. We do not
				sell, rent, or otherwise provide your Personally Identifiable Information to third parties for marketing
				purposes. We may provide your Personally Identifiable Information to affiliates that provide services to us with
				regards to our Website (i.e. payment processors, Website hosting companies, etc.); such affiliates will only
				receive information necessary to provide the respective services and will be bound by confidentiality agreements
				limiting the use of such information. - Data Aggregation. We retain the right to collect and use any Non
				Personal Information collected from your use of our Website and aggregate such data for internal analytics that
				improve our Website and Service as well as for use or resale to others. At no time is your Personally
				Identifiable Information included in such data aggregations.
			</p>

			<Header>Links to Other Websites</Header>
			<p>
				Our Website contain links to other websites that are not under our direct control. These websites may have their
				own policies regarding privacy. We have no control of or responsibility for linked websites and provide these
				links solely for the convenience and information of our visitors. You access such linked Websites at your own
				risk. These websites are not subject to this Privacy Policy. You should check the privacy policies, if any, of
				those individual websites to see how the operators of those third-party websites will utilize your personal
				information. In addition, these websites may contain a link to Websites of our affiliates. The websites of our
				affiliates are not subject to this Privacy Policy, and you should check their individual privacy policies to see
				how the operators of such websites will utilize your personal information.
			</p>

			<Header>Privacy Policy Updates</Header>
			<p>
				We reserve the right to modify this Privacy Policy at any time. You should review this Privacy Policy
				frequently. If we make material changes to this policy, we may notify you on our Website, by a blog post, by
				email, or by any method we determine. The method we chose is at our sole discretion. We will also change the
				&quot;Last Updated&quot; date at the beginning of this Privacy Policy. Any changes we make to our Privacy Policy
				are effective as of this Last Updated date and replace any prior Privacy Policies. Questions About Our Privacy
				Practices or This Privacy Policy. If you have any questions about our Privacy Practices or this Policy, please
				contact us.
			</p>
		</Inner>
	</Outer>
);

export default Privacy;