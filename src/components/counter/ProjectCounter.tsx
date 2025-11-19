import AnimatedCounterTwo from './AnimatedCounterTwo';
const stats = [
    {
        id: 1,
        value: 1200,
        suffix: "+",
        duration: 1,
        tagline: "[ Nice! ]",
        title: "Successful Print Jobs"
    },
    {
        id: 2,
        value: 12,
        suffix: "+",
        duration: 1,
        tagline: "[ Holy Moly! ]",
        title: "Years of Experience"
    },
    {
        id: 3,
        value: 155,
        suffix: "%",
        duration: 1,
        tagline: "[ Ho Ho! ]",
        title: "Year-on-Year Growth"
    },
    {
        id: 4,
        value: 24,
        suffix: "/7",
        duration: 1,
        tagline: "[ AnyTime! ]",
        title: "Production Capability"
    }
];

const ProjectCounter = ({ spacingCls = "pt-140" }) => {

    return (
        <div className="container container-1510">
            <div className={`des-project-title-wrap pb-90 ${spacingCls}`}>
                <div className="row align-items-center">
                    <div className="col-xxl-6 col-xl-5">
                        <div className="des-project-title-box">
                            <span className="tp-section-subtitle text-capitalize text-black mb-15">
                                Fun Facts
                            </span>
                            <h3 className="tp-section-title-mango mb-0">
                                Numbers that Speak Volumes
                            </h3>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-7">
                        <div className="des-project-top-text">
                            <p>
                             We are committed to delivering high-precision, 
                             high-quality labeling solutions backed by modern technology, 
                             skilled expertise, and years of industry experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="des-project-wrap">
                <div className="row">
                    {stats.map((stat) => (
                        <div key={stat.id} className="col-xxl-6 offset-xxl-6 col-xl-7 offset-xl-5">
                            <div className="des-project-item d-flex align-items-center">
                                <div className="des-project-total">
                                    <span>
                                        <AnimatedCounterTwo min={0} max={stat.value} />{stat.suffix}
                                    </span>
                                </div>
                                <div className="des-project-info">
                                    <span>{stat.tagline}</span>
                                    <h4>{stat.title}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCounter;