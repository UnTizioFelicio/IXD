
function Traduttore(mode, stringa) {

    const alfabeto = "abcdefghijklmnopqrstuvwxyz".split("");
    const emojis = "🦅🐳🐴🐲🐘🦋🐔🙊🙈🙉🐨🐺🐮🐦🐻🐣🦆🐸🐍🐹🦄🦊🐫🦔🦦🦓".split("")


    if (mode === 0) {
        var testo_tradotto_list = [];
        stringa.split("").forEach((lettera) => {
            if (alfabeto.includes(lettera)) {
                testo_tradotto_list.push(emojis[alfabeto.indexOf(lettera)])
            } else {
                testo_tradotto_list.push(lettera)
            }
        });

    } else if (mode === 1) {
        stringa.split("").forEach((emoji) => {
            if (emojis.includes(emoji)) {
                testo_tradotto_list.push(alfabeto[emojis.indexOf(emoji)])
            } else {
                testo_tradotto_list.push(emoji)
            }
        });
    }



    return testo_tradotto_list;
    
}


export default Traduttore;





