import { ErrorMessage, Field, Form, Formik } from 'formik'
import { useId } from 'react'
import { nanoid } from 'nanoid'
import * as Yup from "yup";
import css from './ContactForm.module.css'



export default function ContactForm({addContact}) {
    const nameFieldId = useId();
    const numberFieldId = useId();
    const ContactSchema = Yup.object().shape({
        contactName: Yup.string().min(3, "Too short").max(50, "Too long").required("Required"),
        contactNumber: Yup.string().min(3, "Too short").max(50, "Too long").required("Required")
    });

    return (
        <Formik initialValues={{ contactName: "", contactNumber: "" }} validationSchema={ContactSchema} onSubmit={({contactName, contactNumber}, actions) => {
            const newContact = { id: nanoid(), name: contactName, number: contactNumber };
            addContact(newContact);
            actions.resetForm();
        }}>
            <Form className={css.form}>

                <div className={css.inputWrapper}>

                    <label className={css.inputLabel} htmlFor={nameFieldId}>Name</label>

                    <Field className={css.input} type="text" name="contactName" id={nameFieldId}></Field>

                    <ErrorMessage className={css.error} name="contactName" component="span" />
                </div>
                <div className={css.inputWrapper}>

                    <label className={css.inputLabel} htmlFor={numberFieldId}>Number</label>

                    <Field className={css.input}  type="phone" name="contactNumber" id={numberFieldId}></Field>
                    
                    <ErrorMessage className={css.error} name="contactNumber" component="span"/>
                </div>
            
                <button className={css.submitBtn} type="submit">Add contact</button>
                
          </Form>
        </Formik>
    )
}