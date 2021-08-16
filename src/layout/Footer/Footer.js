import { Socials } from "../../data/Socials";
import { Address } from "../../data/Address";
import { Contacts } from "../../data/Contacts";
import s from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <section className={s.blockWrapper}>
                <div className={s.socials}>
                    <div className={s.socialsTitle}>
                        <span>Socials</span>
                    </div>
                    <ul className={s.socialsBlock}>
                        {
                            Socials.map(i => (
                                <a href={i.src}>{i.title}</a>
                            ))
                        }
                    </ul>
                </div>
                <div className={s.address}>
                    <div className={s.addressTitle}>
                        <span>Address</span>
                    </div>
                    {
                        Address.map(i => (
                            <div className={s.addressData}>
                                <span>{i.building}. {i.street}, {i.floor}th Floor</span>
                                <span>{i.city}, {i.state} {i.code}</span>
                            </div>
                        ))
                    }
                </div>
                <div className={s.contacts}>
                    <div className={s.contactsTitle}>
                        <span>Say Hi!</span>
                    </div>
                    {
                        Contacts.map(i => (
                            <div className={s.contactsData}>
                                <span>Tel: {i.phone}</span>
                                <span className={s.email}>E-Mail: {i.email}</span>
                            </div>
                        ))
                    }
                    <span className={s.brand}>Silva Brand Agency © 2020</span>
                </div>
            </section>
        </footer>
    )
};


export default Footer;