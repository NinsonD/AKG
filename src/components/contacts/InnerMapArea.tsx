import mapIcon from '../../../public/assets/img/contact/map-icon.svg';
import Image from 'next/image';

const InnerMapArea = () => {
    return (
        <div className="tp-contact-map-ptb p-relative pb-120">
            <div className="tp-contact-map-wrapper p-relative">
                <div className="tp-contact-map-icon-box">
                    <div className="tp-contact-map-icon">
                        <span><Image src={mapIcon} alt="contact image" /></span>
                    </div>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.8726117456657!2d55.272419!3d25.176615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6c6c6c6c6c6d%3A0x1234567890abcdef!2sArkPackaging!5e0!3m2!1sen!2sae!4v1745055504744" width="600" height="450" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default InnerMapArea;