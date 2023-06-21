function RightTwoTwarz() {
    return (
        <section id="right-two">
            <h2>Sprawdź cenę swoje wizyty</h2>
            <form>
                <input type="checkbox" name="piling" id="piling" /> Piling<br />
                <input type="checkbox" name="maska" id="maska" /> Maska<br />
                <input type="checkbox" name="masaz_twarzy" id="masaz_twarzy" /> Masaż twarzy<br />
                <input type="checkbox" name="regulacja_brwi" id="regulacja_brwi" /> Regulacja brwi<br />
                <input type="button" value="Sprawdź cenę" />
            </form>
            <div id="wynik"></div>
        </section>
    )
}

export default RightTwoTwarz;