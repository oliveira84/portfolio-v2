import React, {useContext, useState} from 'react';
import "./contact.scss";
import emailjs from 'emailjs-com';
import {ThemeContext} from "../../context";

import {Mail} from "@material-ui/icons";

const Contact = () => {
	const [sent, setSent] = useState(false);
	const [error, setError] = useState(false);
	const {isDark} = useContext(ThemeContext);

	function sendEmail(e: any) {
		e.preventDefault();
		emailjs.sendForm('service_5vskdvo', 'template_f5qpi58', e.target, 'user_Ymd1lCnjzFCsQscv1YHpd')
			.then((result: any) => {
				/*console.log(result.text);*/
				setSent(true);
			}, (error: any) => {
				/*console.log(error.text);*/
				setError(true);
			});
	}

	return (
		<div className={`contact-container ${isDark && "dark"}`}>
			<div className="wrapper">
				<div className="title-wrapper">
					<div className="icon-wrapper">
						<Mail className={"icon"}/>
						<div className="line line1"/>
						<div className="line line2"/>
						<div className="line line3"/>
						<div className="line line4"/>
					</div>
					<h2 className={"title"}>Contact</h2>
				</div>

				<div className="form-wrapper">
					<form className="contact-form" onSubmit={sendEmail}>
						<input type="hidden" name="contact_number"/>
						<label>Name</label>
						<input type="text" name="user_name"/>
						<label>Email</label>
						<input type="email" name="user_email"/>
						<label>Message</label>
						<textarea name="message"/>
						<input className={"button"} type="submit" value="Send"/>
						<span className={"sent " + (sent && "showSent")}>Thanks for your message.</span>
						<span className={"error " + (error && "showError")}>Something went wrong, please contact me through oliveiradaniel@outlook.com.</span>
					</form>
				</div>

			</div>
		</div>
	);
}
export default Contact;