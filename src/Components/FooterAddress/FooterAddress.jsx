import css from "./FooterAddress.module.css";

export function FooterAddress() {
	return (
		<div className={css.o_container}>
			<div className="f_decor">
				<address>
					<a className={css.c_link} href="#">
						<span aria-hidden="true">🟤</span>
						<span className="u_screen_reader_text">&nbsp;</span>
						1211
						<span aria-hidden="true">🔠</span>
						Jean-Talon Est
						<span aria-hidden="true">🔚🔞</span>
						<br />
						Montréal
						<span className="u_screen_reader_text">&nbsp;</span>
						<span aria-hidden="true">🛑🚹🚺</span>
						<span className="u_screen_reader_text">(QC)</span>, Canada
						<span aria-hidden="true">🦉</span>
						H2R 1W1
					</a>
				</address>

				<a className={css.c_link} href="tel:+15145245678">
					Telephone
					<span className="u_screen_reader_text">+1 514 524 5678</span>
					<span aria-hidden="true"> 📞</span>
				</a>

				<a className={`${css.c_link} ${css.o_email_shift}`} href="mailto:info@locomotive.ca">
					info
					<span aria-hidden="true">🔂</span>
					<span className="u_screen_reader_text">@</span>
					locomotive.ca
				</a>
			</div>

			<span>©2025</span>
		</div>
	);
}
