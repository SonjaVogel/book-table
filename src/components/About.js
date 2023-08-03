import '../styles/About.css';

const longAbout = [
    "Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.",
    "To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region."
]

function About() {

    return(
        <section className="about grid">
            <div className="about-item">
                <h2 className="section-title">
                    About Little Lemon
                </h2>
                {longAbout.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
            <div className="about-item">
                <img src={`${process.env.PUBLIC_URL}/Mario+Adrian B.jpg`} alt="Little Lemon Founders" />
                <img src={`${process.env.PUBLIC_URL}/Mario+Adrian A.jpg`}  alt="Little Lemon Founders" />
            </div>
        </section>
    )
}

export default About;