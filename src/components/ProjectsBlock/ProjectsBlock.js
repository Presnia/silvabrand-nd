import lamp from './lamp-img.svg';
import websiteDesign from './projects-img1.png';
import playerBtn from "../StrategyBlock/player-btn.png";
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
        </section>
    )
};

export default ProjectsBlock;