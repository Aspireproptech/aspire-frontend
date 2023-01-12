import React from 'react'
import { Container } from 'react-bootstrap'
import HomeFest from './HomeFest'

const PrivacyPolicy = () => {
    return (
        <>
            <HomeFest />
            <Container fluid className='privacy-page my-5' style={{ padding: "0 30px" }}>
                <h3>Privacy Policy</h3>
                <p>This policy is in relation to the information/data we collect from you when you use our website and the manner in which we hold, process and use the data collected</p>
                <br />
                <p>Data Collection & Usage</p>
                <br />
                <p>We may collect the following data from you:</p>
                <ul>
                    <li><p>Name, phone number and email address</p></li>
                    <li><p>Data secured from communications through mails, messages and calls</p></li>
                    <li><p>Other data including but not limited to technical information regarding location, IP address and network carrier when you use our website</p></li>
                </ul>
                <br />
                <p>
                    When you use our website, you unconditionally give us consent to collect, store, retain and process any information provided by you. The information is used for the following purposes:
                </p>
                <ul>
                    <li><p>To improve the efficiency of our website and to provide a better user experience</p></li>
                    <li><p>Effective communication and customer service, appraising you about various schemes for purchase of property in any of our projects</p></li>
                    <li><p>Proceed with purchase of a unit/plot/site in our project/s and execution of agreement of sale and all related purposes</p></li>
                    <li><p>The email address provided is used to give you updates about your unit/ enquiry/ request as well as occasional company news, updates, promotions, related product or service information</p></li>
                </ul>
                <br />
                <p>You hereby give consent for Aspire Group and/or any of its clients and affiliates, to disclose the information/data, if required under the applicable laws. The information provided to us is not shared or communicated to any third parties or other stakeholder/s.</p>
                <br />
                <p>This policy is applicable for the information collected through our website and not for information collected offline.</p>
                <br />
                <p>Any changes/ modifications to this policy, shall be updated on this page from time to time. We recommend that you review this policy from time to time to stay updated with changes/modifications, if any.</p>
                <br />
                <p>In the event that you have any further queries, require any further information regarding your data in our possession, you can reach to us at hello@aspireprop.com</p>
                <br />
                <p>
                    When you voluntarily send us electronic mail, we will keep a record of this information so that we can respond to you. We only collect information from you when you register on our site or fill out a form. Also, when filling out a form on our site, you may be asked to enter your: name, e-mail address or phone number. You may, however, visit our site anonymously. In case you have submitted your personal information and contact details, we reserve the rights to Call, SMS, Email or WhatsApp about our products and offers, even if your number has DND activated on it.
                </p>
            </Container>
        </>
    )
}

export default PrivacyPolicy