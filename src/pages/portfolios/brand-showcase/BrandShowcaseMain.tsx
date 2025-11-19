"use client";
import CursorAndBackgroundProvider from '@/components/provider/CustomCursorProvider';
import AnimationWrapper from '@/components/shared/Animation/AnimationWrapper';
import ScrollSmoothProvider from '@/components/provider/ScrollSmoothProvider';
import BrandShowcaseHero from '@/components/hero-banner/BrandShowcaseHero';
import DesignStudioFooter from '@/layouts/footers/DesignStudioFooter';
import BrandShowcaseBrand from '@/components/brand/BrandShowcaseBrand';
import BackToTop from '@/components/shared/BackToTop/BackToTop';
import CommonHeader from '@/layouts/headers/CommonHeader';

const PortfolioColTwoMain = () => {

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
                                <BrandShowcaseHero />
                                <BrandShowcaseBrand />
                            </main>
                            <DesignStudioFooter />
                        </div>
                    </div>
                </AnimationWrapper>
            </CursorAndBackgroundProvider>
            {/* CommonHeader handles mobile/desktop offcanvas */}
        </ScrollSmoothProvider>
    );
};

export default PortfolioColTwoMain;