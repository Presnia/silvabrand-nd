import lamp from './lamp-img.svg';
import websiteDesign from './projects-img1.png';
import playerBtn from "../StrategyBlock/player-btn.png";
import brandingBlockImg from './projects-img2.png';
import casesBlockImg from './projects-img3.png';
import allProjectsBtn from './round-img.svg';
import s from './ProjectsBlock.module.css';

const ProjectsBlock = () => {
    return (
        <section className={s.projectsBlock}>
            <div className={s.headerBlock}>
                <img src={lamp} alt='lamp'/>
                <div className={s.titleBlockContainer}>
                    <div className={s.titleBlock}>
                        <h2 className={s.title}>
                            Branding that surprises, delights, entertains and intrigues is what we’re after
                        </h2>
                    </div>
                </div>
            </div>
            <aside className={s.aside}>Projects</aside>
            <div className={s.websiteDesignContainer}>
                <div className={s.websiteDesignBlock}>
                    <img className={s.websiteDesign} src={websiteDesign} alt='website design'/>
                    <img className={s.playerBtn} src={playerBtn} alt='player button'/>
                </div>
                <div className={s.blockName}>
                    <span>01</span>
                    <h3>Website design</h3>
                </div>
            </div>
            <section className={s.blocksContainer}>
                <div className={s.brandingBlock}>
                    <img className={s.brandingBlockImg} src={brandingBlockImg} alt='branding digital'/>
                    <div className={s.blockName}>
                        <span>02</span>
                        <h3>Branding digital</h3>
                    </div>
                </div>
                <div className={s.casesBlock}>
                    <img className={s.casesBlockImg} src={casesBlockImg} alt='branding digital'/>
                    <div className={s.blockName}>
                        <span>03</span>
                        <h3>Cases</h3>
                    </div>
                </div>
                <button className={s.allProjectsBtn}>
                    <img className={s.allProjectsImg} src={allProjectsBtn} alt='all projects button'/>
                </button>
            </section>
        </section>
    )
};

export default ProjectsBlock;