import TopSection from '../components/homepage/TopSection';
import StepsSection from '../components/homepage/StepsSection';
import AboutUsSection from '../components/homepage/AboutUsSection';
import SlideOffert from '../components/homepage/SlideOffert';
import carAnimation from '../../public/car.mp4';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const HomePage = () => {
  return (
    <div>
      {carAnimation ? (
        <>
          <TopSection carAnimation={carAnimation} />
          <StepsSection />
          <AboutUsSection />
          <SlideOffert />
        </>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default HomePage;
