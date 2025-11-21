import BrandShowcaseMain from '@/pages/portfolios/brand-showcase/BrandShowcaseMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "ARK Packaging - Gallery",
};

const page = () => {
    return (
        <BrandShowcaseMain />
    );
};

export default page;
