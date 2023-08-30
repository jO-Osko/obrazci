// SPLOŠNA NAVODILA:
// Nastavi vse med "// Config" in "// END OF CONFIG" na take vrednosti kot hočeš, če je nastavljeno na "", potem bo pustilo prazno polje
// Ostalih stvari ne spreminjaj, če ne veš kaj počneš

// Ko želiš uporabiti skripto, jo skopiraj v odložišče (kot normalno)
// Pojdi na stran, ki jo želiš izpolniti, klikni z desnim klikom na eno izmed polj, ki ga je potrebno izpolniti in izberi "preglej" (inspect v angleščini)
// spodaj izberi konzola (console), prilepi kodo in pritisni enter
// Na koncu ne pozabi shranit strani, ki si jo izpolnjeval

// POMEMBNO: moraš izbrati polje, ki je nekje v notranjosti poročila, drugače zadeva ne bo delovala
// Ko greš na novo stran kode ne rabiš na novo kopirat (razen če si spreminjal config), moraš pa na novo izbrati preglej nekje v notranjosti poročila
// Sedaj spet prilepiš kodo in pritisneš enter pa si

// Če gre kje kaj narobe: koprivec.filip(afna)gmail.com
// Mogoče bom dovzeten tudi za kakšne glasbene želje, če pa imaš popravek se pa lepo priporočam.

// To izpolni ljudi, ki so bili na intervenciji
// Ljudi poišče po priimku in imenu, kjer ignorira velikost, je pa pozoren na ČŠŽ
// Izpolni samo ljudi, katerih vrstica se NE začne z //
// To pomeni, da si lahko enkrat izpolniš celotno tabelo, potem pa jih po potrebu vključuješ/izključuješ s tem da vrstico začneš z //
// Opomba: To ni preverjeno, če imaš slučajno ljudi čez več strani
(function () {

    // Config
    var selected = [
        ["BAN", "ŽANE"],
        // ["BORŠTNAR", "PATRICIA"],
        // ["CIUHA CERKOVNIK", "NINA"],
        // ["FRIŠKOVEC", "BARBARA"],
        ["GUTNIK", "ANDREJ"],
        // ["HANŽELIČ", "LEA"],
        ["HRIBAR", "ROK"],
        // ["HRIBAR", "STAŠA"],
        ["HUDIN", "TIM"],
        // ["JELOVŠEK", "BORUT"],
        // ["JELOVŠEK", "GREGOR"],
        ["JERAJ", "JAN"],
        // ["JESENOVEC", "JANEZ"],
        // ["KASTELIC", "KLEMEN"],
        // ["KASTELIC", "TOMAŽ"],
        ["KLEVIŠAR", "ANŽE"],
        ["KLEVIŠAR", "BLAŽ"],
        ["KOPRIVEC", "FILIP"],
        // ["KOPRIVEC", "SLAVKO"],
        // ["KRUŠNIK", "ZDENKO"],
        // ["MERLINI", "GAJ"],
        // ["MRZLIKAR", "ROBERT"],
        // ["NARTNIK", "MATJAŽ"],
        // ["NOVAK", "EMA"],
        // ["OBLAK", "ANŽE"],
        ["OBLAK", "BLAŽ"],
        ["OBLAK", "IGOR"],
        // ["OBLAK", "JOŠT"],
        // ["PODBOJ", "JANEZ"],
        ["PODOBNIKAR", "TILEN"],
        ["POLIČNIK", "NEJC"],
        // ["POPIT", "KRISTINA"],
        ["POPIT", "MATEJ"],
        // ["SOTLAR", "SEBASTJAN"],
        ["TOME", "NEJC"],
        // ["URBANČIČ", "TILEN"],
        // ["URBANČIČ", "TOMAŽ"],
        // ["VELKAVRH", "JANEZ"],
        ["VOJSKA", "JURE"],
        // ["VOJSKA", "TINE"],
        ["ZDEŠAR", "ANDREJ"],
        ["ZDEŠAR", "ANŽE"],
        ["ZDEŠAR", "SEBASTJAN"],
        // ["ZDEŠAR", "URŠKA"],
        // ["ŽITKO PIRC", "JOŽEFA"]
    ]

    // END OF CONFIG

    var tableId = "ucIntOrgClan_ucIntOrgClanClan_ucIntOrgClanDodaj_gv"


    var tab = document.getElementById(tableId)
    var table = tab.children[0].children

    fullNames = ""

    for (var a = 0; a < table.length; ++a) {

        var nm = table[a].childNodes[3].innerText.toLowerCase();
        var surname = table[a].childNodes[2].innerText.toLowerCase();

        for (var i = 0; i < selected.length; ++i) {
            if (nm == selected[i][1].toLowerCase() && surname == selected[i][0].toLowerCase()) {
                table[a].childNodes[1].childNodes[1].checked = true
            }
        }
        fullNames += "[\"" + table[a].childNodes[2].innerText + "\", \"" + table[a].childNodes[3].innerText + "\"],"
    }
})()

    // Tukaj nehaj s kopiranjem, če si želiš izpolniti podatke o intervenciji


    // To izpolni podatke o intervenciji (posamezni zavihki pod ročni vnos)

    // NAVODILA:
    // Nastavi vse med "// Config" in "// END OF CONFIG" na take vrednosti kot hočeš, če je nastavljeno na "", potem bo pustilo prazno polje

    //  refundacije in podobno
    // 19 za 18.7.2023
    // 21 za 19.7.2023

    // Urejanje inervencij
    (function () {
        // Config
        const datum = "18.07.2023"
        const steviloUr = 1
        const steviloGasilcev = 19
        const steviloRefundacija = ""

        // Vozila
        // Mala
        const gvm1 = 1
        const pv1 = 0
        const gvz1 = 0
        const gv1 = 0
        const gvgp1 = 0
        // Srednja
        const gvv1 = 0
        const gvgp2 = 0
        // Velika
        const gcgp = 0
        const gvv2 = 0
        const gvc = 1
        const ac = 0
        const al = 0
        // ostalo
        const ostalo = 0

        // Gorivo & kilometri
        const skupajKm = 0
        const skupajGorivo = 0

        // Oprema: prva je število, druga je količina goriva
        const motornaZaga = [1, 1]
        const agregat = [0, 0]
        const motornaBrizgalna = [0, 0]
        const potopnaCrpalka = [0, 0]

        // Poškodbe
        const poskodbe = "0"
        // END OF CONFIG

        // NE UREJAJ OD TU NAPREJ ČE NE VEŠ KAJ POČNEŠ !!!

        // Vulkan names config
        const datumId = "ucIntervencija_tDatum"
        const steviloUrNaGasilcaId = "ucIntervencija_tStUrGasilec"
        const steviloGasilcevId = "ucIntervencija_tStGasilcev"
        const steviloRefundacijaId = "ucIntervencija_tStGasilcevRefundacija"

        // Vozila
        // Mala
        const gvm1Id = "ucIntervencija_tStGVM1"
        const pv1Id = "ucIntervencija_tStPV1"
        const gvz1Id = "ucIntervencija_tStGVZ1"
        const gv1Id = "ucIntervencija_tStGV1"
        const gvgp1Id = "ucIntervencija_tStGVGP1"
        // Srednja
        const gvv1Id = "ucIntervencija_tStGVV1"
        const gvgp2Id = "ucIntervencija_tStGVGP2"
        // Velika
        const gcgpId = "ucIntervencija_tStGCGP"
        const gvv2Id = "ucIntervencija_tStGVV2"
        const gvcId = "ucIntervencija_tStGVC"
        const acId = "ucIntervencija_tStAC"
        const alId = "ucIntervencija_tStAL"
        // ostalo
        const ostaloId = "ucIntervencija_tStVozilaOstalo"

        // Gorivo & kilometri
        const skupajKmId = "ucIntervencija_tPrevozenoKm"
        const skupajGorivoId = "ucIntervencija_tGorivo"

        // Oprema: prva je število, druga je količina goriva
        const motornaZagaId = ["ucIntervencija_tStMotornaZaga", "ucIntervencija_tGorivoMotornaZaga"]
        const agregatId = ["ucIntervencija_tStAgregat", "ucIntervencija_tGorivoAgregat"]
        const motornaBrizgalnaId = ["ucIntervencija_tStMotornaBrizgalna", "ucIntervencija_tGorivoMotornaBrizgalna"]
        const potopnaCrpalkaId = ["ucIntervencija_tStPotopnaCrpalka", "ucIntervencija_tGorivoPotopnaCrpalka"]

        const poskodbeId = "ucIntervencija_tOpremaPoskodbaVrednost"

        // END OF CONFIG

        // MAKE PAIRS
        const pairs = [
            [datumId, datum],
            [steviloUrNaGasilcaId, steviloUr],
            [steviloGasilcevId, steviloGasilcev],
            [steviloRefundacijaId, steviloRefundacija],
            [gvm1Id, gvm1],
            [pv1Id, pv1],
            [gvz1Id, gvz1],
            [gv1Id, gv1],
            [gvgp1Id, gvgp1],
            [gvv1Id, gvv1],
            [gvgp2Id, gvgp2],
            [gcgpId, gcgp],
            [gvv2Id, gvv2],
            [gvcId, gvc],
            [acId, ac],
            [alId, al],
            [ostaloId, ostalo],
            [skupajKmId, skupajKm],
            [skupajGorivoId, skupajGorivo],
            ...[
                [motornaZagaId, motornaZaga],
                [agregatId, agregat],
                [motornaBrizgalnaId, motornaBrizgalna],
                [potopnaCrpalkaId, potopnaCrpalka]
            ].flatMap(v => {
                const uids = v[0]
                const values = v[1]
                return uids.map((uid, i) => [uid, values[i]])
            }),
            [poskodbeId, poskodbe]
        ]

        pairs.forEach(pair => {
            console.log(pair[0])
            document.getElementById(pair[0])
            document.getElementById(pair[0]).value = pair[1]
        })
    })()  