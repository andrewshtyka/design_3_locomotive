import css from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={css.c_container}>
      <h1 className={`f_decor ${css.c_heading}`}>
        <span aria-hidden="true">🔶 </span>
        Locomotive&reg;
        <br />
        Digital-first Design Agency<span aria-hidden="true">🍺🔞</span>
      </h1>
    </section>
  );
}
