import FooterBasic from 'components/FooterBasic';
import RecommendHeader from 'pages/Recommend Page/components/RecommendHeader';
import RecommendCard from './components/RecommendCard';
import { recommendations } from 'data/recommendations';

export default function RecommendPage() {

  
  return (
    <>
      <div className="min-h-screen bg-lp-darkisher pt-32 pb-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-16">
          <RecommendHeader />

          <div className="max-w-5xl mx-auto flex flex-col gap-6 fade-in-2">
            <div className="flex flex-col items-center">
              <div className="text-4xl text-white font-bold">Results</div>
            </div>
            <div className="flex flex-col gap-4">
              {' '}
              {recommendations.map((rec, index) => (
                <RecommendCard
                  key={rec.title}
                  {...rec}
                  big={index < 3} // top 3 bigger
                />
              ))}
            </div>
            <div className="flex justify-center">
              <button
                className="text-base bg-lp-orange hover:bg-lp-orange-dark
                  text-white px-6 py-3 rounded-md transition-colors"
              >
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
      <FooterBasic />
    </>
  );
}
