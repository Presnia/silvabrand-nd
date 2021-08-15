import target from './target-group.svg';
import decorLine from './decor-line.svg';
import strategyBlockImage from './strategy-img.png';
import playerBtn from'./player-btn.png';
import s from './StrategyBlock.module.css';

const StrategyBlock = () => {
    return (
        <section className={s.strategyBlock}>
            <aside className={s.titleBlock}>Strategy</aside>
            <div className={s.infoContainer}>
                <p>We use our two decades of corporate strategy and execution to make your company or project resonate and real
                </p>
                <img src={target} alt='target icon'/>
                <img className={s.decorLine} src={decorLine} alt='decorative line'/>
            </div>
            <div className={s.imageContainer}>
                <img className={s.strategyBlockImage} src={strategyBlockImage} alt='strategy block'/>
                <img className={s.playerBtn} src={playerBtn} alt='player button'/>
            </div>
        </section>
    )
};

export default StrategyBlock;