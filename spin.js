(function () {
    var tableId = "ucIntOrgClan_ucIntOrgClanClan_ucIntOrgClanDodaj_gv"

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