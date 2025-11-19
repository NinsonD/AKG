import { ArrowTwentyTwo } from '@/svg/ArrowIcons';

const AboutModernMoving = () => {
    return (
        <div className="des-about-2-area pb-150">
            <div className="container container-1230">
                <div className="row justify-content-center">
                    <div className="col-xl-12">
                        <div className="des-text-about-us-wrap p-relative text-center">
                            <div className="des-text-shape d-flex justify-content-center align-items-center">
                                <span className="shape-1">
                                    <ArrowTwentyTwo direction='left' />
                                </span>
                                <h4 className="des-text-title">Our Vision</h4>
                                <span className="shape-2">
                                    <ArrowTwentyTwo direction='right' />
                                </span>
                            </div>
                        </div>
                        <div className="des-about-text text-center">
                            <p>
                                To continuously meet the growing demands of the labeling and packaging industry through <span>innovation, technology, and customer-focused service.</span> We are committed to delivering <span>end-to-end solutions</span> with the highest quality standards and fastest turnaround times in the UAE.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutModernMoving;