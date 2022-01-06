import Styles from "./Contact.module.css";
import { useState, FormEvent } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
    const [gender, setGender] = useState({ female: "Female", male: "Male" });
  

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs.sendForm('service_wjgkm9r', 'template_7biu1ed', e.currentTarget, 'user_RjyQba1NicdNC4ibWX7Bw')
            .then((result) => {
                console.log(result);
                console.log("e.target " + e.target);
            }, (error) => {
                console.log(error.text);
            });
        e.currentTarget.reset();
    }

    return (
        <div className={Styles.container}>

            <div className={Styles.kleineContainer}>
                <div className={Styles.contacContainer}>
                    <div className={Styles.map}>
                        <iframe className={Styles.iframe} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d450456.669649371!2d4.11813677195282!3d51.413250878284565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f6f26326663f%3A0x9294d0a4234d731d!2sKloosterstraat%20144%2C%202000%20Antwerpen!5e0!3m2!1snl!2sbe!4v1638973843131!5m2!1snl!2sbe" loading="lazy"></iframe>
                    </div>

                    <div className={Styles.contactInfo}>
                        <h1 className={Styles.contactUsH1}>Contact us</h1>
                        <div className={Styles.contact}>
                            <div className={Styles.mail}><a href="mailto:webmaster@example.com">Email: webmaster@example.com</a></div>
                            <div className={Styles.bel}><a href="tel:+4733378901">Tel: 03 333 78 901</a></div>
                            <div className={Styles.whatsapp}><a href="tel:+4733378901">Whatsapp: 47 333 78 901</a></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={Styles.kleineContainer}>
                <div className={Styles.formulierContailner}>

                    <div className={Styles.img}><img className={Styles.envelop} src="./envelop.webp" /></div>
                    <div className={Styles.formulierSmallContailner}>
                        <h1 className={Styles.h1Text}>Form</h1>

                        <form className={Styles.formulier} onSubmit={sendEmail} >


                            <label className="lastNameLabel">First Name</label>
                            <input type="text" placeholder="First Name" name="name" />

                            <label className="lastNameLabel">Last Name</label>
                            <input type="text" placeholder="Last Name" name="familyname" />


                            <label className="email">Email</label>
                            <input className="emailInput" type="email" placeholder="Email" name="email" />

                            <label htmlFor="country">Country</label>
                            <select id="country" name="country">
                                <option value="Belgium">Belgium</option>
                                <option value="Germany">Germany</option>
                                <option value="Netherlands">Netherlands</option>
                                <option value="France">France</option>
                                <option value="United Kingdom">United Kingdom</option>
                                <option value="Australia">Australia</option>
                                <option value="Canada">Canada</option>
                                <option value="United States">United States</option>
                            </select><br />

                            <div className={Styles.radioButtonContainer}>

                                <div className={Styles.radioButtonMiniContainer}>
                                    <div className={Styles.genderLabelDiv}> <label className={Styles.genderLabel}> Female </label></div>
                                    <div className={Styles.radioFemale}> <input name="radio" value={gender.female} type="radio" checked={true} /></div><br />
                                </div>

                                <div className={Styles.radioButtonMiniContainer}>
                                  <div className={Styles.genderLabelDiv}>  <label className={Styles.genderLabel} > Male </label></div>
                                    <div className={Styles.radioMale}><input type="radio" name="radio" value={gender.male} /></div>
                                </div>
                            </div>


                            <textarea className={Styles.textarea} name="message" placeholder="message"></textarea>
                            <input type="submit" className={Styles.btn} value="Send message" />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact;