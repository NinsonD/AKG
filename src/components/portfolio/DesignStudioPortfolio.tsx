"use client";
import DesignStudioPortfolioCard from './subComponents/DesignStudioPortfolioCard';
import portfolioData from '@/data/portfolioData';

const DesignStudioPortfolio = () => {
  const arkPortfolioItems = portfolioData.filter(item => [1, 2, 3].includes(item.id));
  
  return (
    <div className="des-portfolio-area pb-160">
      <div className="container container-1750">
        <div className="row">
          <div className="col-xl-12">
            <div className="des-portfolio-wrap">
              {arkPortfolioItems.map((item) => (
                <DesignStudioPortfolioCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignStudioPortfolio;