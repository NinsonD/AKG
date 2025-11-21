"use client"
import Link from 'next/link';

const DesignStudioAbout = () => {
    return (
        <div className="des-about-area pb-200">
            <div className="container container-1230">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <div className="des-about-text text-center">
                            <p className="tp_text_invert_3 mb-45">
                               At A R K Packaging Industries L.L.C., we specialize in producing durable, vibrant,
                               and accurate labels that enhance your product’s appearance and performance. With in-house design, prepress, 
                               and 24/7 production, we ensure every label meets the highest standards of quality and consistency.
                            </p>
                            <Link className="tp-btn-border" href="/about-us">
                                More About Us
                                <span>
                                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 9.99999H15.2222M8.11121 1.11108L17.0001 9.99997L8.11121 18.8889" stroke="currentcolor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignStudioAbout;