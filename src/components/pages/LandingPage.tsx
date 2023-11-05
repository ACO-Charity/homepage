import JoinUs from '../sections/  JoinUs.tsx';
import AboutUs from '../sections/AboutUs.tsx';
import AcoFacts from '../sections/ACOFacts.tsx';
import Donation from '../sections/Donation.tsx';
import ProjectsSection from '../sections/ProjectsSection.tsx';

const LandingPage = () => {
    return (
        <>
            <AboutUs/>
            <AcoFacts/>
            <ProjectsSection/>
            <Donation/>
            <JoinUs/>
        </>
    );
};

export default LandingPage;