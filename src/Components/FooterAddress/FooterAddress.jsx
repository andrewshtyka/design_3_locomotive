import css from "./FooterAddress.module.css";

export function FooterAddress({ className }) {
	return (
		<div className={`${css.o_container} ${className ? " " + className : ""}`}>
			<div className={`f_decor ${css.o_container_info}`}>
				<address className={`${css.f_custom} ${css.o_item_address}`}>
					<a className={css.c_link} href="#">
						<span aria-hidden="true">🟤</span>
						1211
						<span aria-hidden="true">🔠</span>
						Jean-Talon Est
						<span aria-hidden="true">🔚🔞</span>
						<br className={css.u_display_none} />
						Montréal
						<span aria-hidden="true">🛑🚹🚺</span>
						<span className="u_screen_reader_text">(QC)</span>,<span aria-hidden="true">&nbsp;</span>
						<br className={css.u_display} />
						Canada
						<span aria-hidden="true">🦉</span>
						H2R 1W1
					</a>
				</address>

				<div className={css.o_details}>
					<a className={`${css.c_link} ${css.f_custom} ${css.o_item_phone}`} href="tel:+15145245678">
						Telephone
						<span className="u_screen_reader_text">+1 514 524 5678</span>
						<span aria-hidden="true"> 📞</span>
					</a>
					<a className={`${css.c_link} ${css.f_custom} ${css.o_item_email}`} href="mailto:info@locomotive.ca">
						info
						<span aria-hidden="true">🔂</span>
						<span className="u_screen_reader_text">@</span>
						locomotive.ca
					</a>
				</div>
			</div>

			<span>©2025</span>
		</div>
	);
}
