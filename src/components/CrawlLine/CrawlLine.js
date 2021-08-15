import dot from './dot.svg';
import s from './CrawlLine.module.css';

const CrawlLine = () => {
    return (
        <div className={s.crawlLine}>
            <span className={s.lineTitle}>Brand</span>
            <img className={s.dot} src={dot} alt='dot'/>
            <span className={s.lineTitle}>Delve Deeper Into Your Brand with Silva Brand</span>
        </div>
    )
};

export default CrawlLine;