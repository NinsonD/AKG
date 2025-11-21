import PortfolioCreativeSkewSlider from '@/pages/portfolios/portfolio-skew-slider/PortfolioCreativeSkewSlider';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "ARK Packaging - Capabilities",
};

const page = () => {
    return (
        <PortfolioCreativeSkewSlider />
    );
};

export default page;
