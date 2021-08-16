import { LineOne } from "../../data/Partners";
import { LineTwo } from "../../data/Partners";
import { LineThree } from "../../data/Partners";
import { LineFour } from "../../data/Partners";
import { LineFive } from "../../data/Partners";
import dot from "../CrawlLine/dot.svg";
import s from './CooperateBlock.module.css';

const CooperateBlock = () => {
    return (
        <section className={s.cooperateBlock}>
            <div className={s.blockTitle}>
                <span>We work with</span>
            </div>
            <div className={`${s.wrapperLine} ${s.line1}`}>
                {
                    LineOne.map(i => (
                        <span className={s.lineOne}>
                        {i.title}
                            <img className={s.dot} src={dot} alt='dot'/>
                    </span>
                    ))
                }
            </div>
            <div className={`${s.wrapperLine} ${s.line2}`}>
                {
                    LineTwo.map(i => (
                        <span className={s.lineTwo}>
                        {i.title}
                            <img className={s.dot} src={dot} alt='dot'/>
                    </span>
                    ))
                }
            </div>
            <div className={`${s.wrapperLine} ${s.line3}`}>
                {
                    LineThree.map(i => (
                        <span className={s.lineThree}>
                        {i.title}
                            <img className={s.dot} src={dot} alt='dot'/>
                    </span>
                    ))
                }
            </div>
            <div className={`${s.wrapperLine} ${s.line4}`}>
                {
                    LineFour.map(i => (
                        <span className={s.lineFour}>
                        {i.title}
                            <img className={s.dot} src={dot} alt='dot'/>
                    </span>
                    ))
                }
            </div>
            <div className={`${s.wrapperLine} ${s.line5}`}>
                {
                    LineFive.map(i => (
                        <span className={s.lineFive}>
                        {i.title}
                            <img className={s.dot} src={dot} alt='dot'/>
                    </span>
                    ))
                }
            </div>
        </section>
    )
};

export default CooperateBlock;