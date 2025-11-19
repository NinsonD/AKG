import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper'; 
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import ContactFormArea from '@/components/contacts/ContactFormArea';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import CommonHeader from '@/layouts/headers/CommonHeader';
import DesignStudioFooter from '@/layouts/footers/DesignStudioFooter';
import InnerMapArea from '@/components/contacts/InnerMapArea';
import ContactHero from '@/components/contacts/ContactHero';

const ContactMain = () => {
    return (
        <ScrollSmoothProvider>
            <CursorAndBackgroundProvider bgColor='#fff'>
                <AnimationWrapper>
                    <div id="magic-cursor" className="cursor-bg-blue">
                        <div id="ball"></div>
                    </div>

                    {/* Global Components */}
                    <BackToTop />
                    <CommonHeader spacingCls="mt-40 header-black-style" />

                    <div id="smooth-wrapper">
                        <div id="smooth-content">
                            {/* Main Content Sections */}
                            <main>
                                <ContactHero />
                                <InnerMapArea />
                                <ContactFormArea />
                            </main>
                            <DesignStudioFooter />
                        </div>
                    </div>
                </AnimationWrapper>
            </CursorAndBackgroundProvider>
        </ScrollSmoothProvider>
    );
};

export default ContactMain;