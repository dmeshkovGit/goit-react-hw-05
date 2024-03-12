import css from './Contact.module.css'
import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
export default function Contact ({onDelete, contact:{id, name,number}}) {
    return (
        <div className={css.contactWrapper}>
            <div className={css.contactInfo}>
                <p className={css.contactText}><IoPerson />{name}</p>
                <p className={css.contactText}><FaPhoneAlt />{number}</p>
            </div>
            <button className={css.deleteBtn} onClick={() => {onDelete(id)}} type="button">Delete</button>
        </div>
    )
}