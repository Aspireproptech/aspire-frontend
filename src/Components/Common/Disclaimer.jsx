import React from 'react'
import { Container } from 'react-bootstrap'
import HomeFest from './HomeFest'

const Disclaimer = () => {
    return (
        <>
            <HomeFest />
            <Container fluid className='privacy-page my-5' style={{ padding: "0 30px" }}>
                <h3>Disclaimer</h3>
                <p>The content of this website is for general information purposes only. While enough care is taken by us to ensure that information on the website is up to date, accurate and correct, readers and website visitors are requested to make their independent inquiry before relying upon the same. In no event, Aspire Group or its clients will offer any warranty on the information made available or be liable for any loss or damage including without limitation, indirect or consequential loss or damage in connection with, the use of information in this website. By using or accessing the website, you agree with the Disclaimer without any qualification or limitation.</p>
                <br />
                <p>The information depicted herein viz., master plans, floor plans, furniture layout, fittings, illustrations, specifications, designs, dimensions, rendered views, colors, amenities and facilities etc., are subject to change without notifications as may be required by the relevant authorities or the developer's architect, and cannot form part of an offer or contract. Whilst every care is taken in providing this information, our clients and Aspire Group cannot be held liable for variations. All illustrations and pictures are artist's impressions only. The information is subject to variations, additions, deletions, substitutions and modifications as may be recommended by the company's architect and/or the relevant approving authorities. The Developers, our clients and Aspire Group are wholly exempt from any liability on account of any claim in this regard. (1 square meter = 10.764 square feet). E & OE. All dimensions and calculations are done in a metric system (M / Sq. m), and imperial system (Ft / Sq. Ft) shown is for reference only. Product cost if any listed on the website is indicative in nature, actual product cost might be different.</p>
                <br />
                <p>The contents of this website are meant to provide information to the readers of this website about ourselves including the various projects of our clients we are working on, various initiatives taken by us, etc. They are only for general information and are subject to change. By no stretch of imagination, the information on the website shall be construed as an advertisement and/or invitation or offer for sale.</p>
                <br />
                <p>The contents, information and material contained in this website are the exclusive property of the Aspire Group and are protected by copyright and intellectual property laws. No person shall use, copy, reproduce, distribute, initiate, publish, display, modify, create derivative works or database, use, transmit, upload, exploit, sell or distribute the same in whole or in part or any part thereof without prior express written permission from the Aspire Group.</p>
                <br />
                <p>Please note that by sharing any of your contact details on the website, you are authorizing us (even if you are registered on the DND Registry) to provide information on our projects over Calls, SMS & Emails.</p>
            </Container>
        </>
    )
}

export default Disclaimer