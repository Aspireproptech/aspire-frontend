const WhatsApps = () => {
    return (
        <div class="whatsapp_float d-block d-lg-none">
            <a href="tel:+919886660229" className="callNow">
                <i class="fa-solid fa-phone"></i>
                <span>Call Now</span>
            </a>
            <div
                onClick={() =>
                    window.open(
                        "https://wa.me/919886660229?text=Hi%20there.%20I%20am%20on%20the%20lookout%20for%20my%20dream%20home%2C%20and%20I%20came%20across%20Aspire%20Proptech%20website.%20Can%20you%20please%20assist%20me%20in%20finding%20the%20perfect%20home%3F"
                    )
                }
                className="whatsApp"
            >
                <i class="fa fa-whatsapp"></i>
                <span>Whatsapp</span>
            </div>
        </div>
    );
};

export default WhatsApps;
