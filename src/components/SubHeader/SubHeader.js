import apollo from './apollo1.png';
import arrow from './arrow-down.svg'
import s from './SubHeader.module.css';

const SubHeader = () => {
    return (
        <div className={s.subHeader}>
            <section>
                <h1>
                    Creative Design
                    <span className={s.subTitle}>Agency</span>
                </h1>
                <button>
                    <img className={s.arrow} src={arrow} alt='arrow down'/>
                </button>
            </section>
            <img src={apollo} alt='apollo'/>
        </div>
    )
};

export default SubHeader;