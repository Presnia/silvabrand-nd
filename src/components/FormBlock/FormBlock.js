import circleImg from './circle-img.svg';
import messageImg from './message-img.svg';
import arrowRight from './arrow-right.svg'
import s from './FormBlock.module.css';

const FormBlock = () => {
    return (
        <section className={s.formBlock}>
            <aside className={s.titleBlock}>Message</aside>
            <div className={s.messageHeader}>
                <img src={circleImg} alt='circle'/>
                <img className={s.messageImg} src={messageImg} alt='circle'/>
                <p className={s.messageDescription}>
                    Delivering your message with the directness and immediacy of a face-to-face encounter without alienating business speak or laundry lists of services that usually obscure instead of enlighten
                </p>
            </div>
            <div className={s.messageForm}>
                <span>Name</span>
                <input className={s.nameInput} type='text'/>
                <span>Email</span>
                <input className={s.emailInput} type='email'/>
                <span>Phone</span>
                <input className={s.phoneInput} type='number'/>
                <span>Message</span>
                <textarea name='message' maxLength='500'></textarea>
                <span className={s.signsCounter}>0/500</span>
                <div className={s.sendBlock}>
                    <div className={s.sendBlockLeftPart}>
                        <span>Let's create</span>
                        <img src={arrowRight} alt='arrow right'/>
                    </div>
                    <button className={s.sendButton}>Send</button>
                </div>
            </div>
        </section>
    )
};

export default FormBlock;