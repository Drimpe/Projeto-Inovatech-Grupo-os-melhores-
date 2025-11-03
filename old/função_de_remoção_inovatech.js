//bloco de remoção de conectivos
function removerConectivos(frases){
    const conectivos =[
        //lista de conectivos que vai ser removido
    "e", "nem", "também", "além disso", "ademais", "outrossim", "não", "só", "mas", "também", "como", "do", "mesmo", "modo", "igualmente", 
    "porém", "contudo", "todavia", "no", "entanto", "entretanto", "embora", "apesar", "de", "ainda", "que","em", "contrapartida", "pelo", 
    "contrário", "oposição", "pois", "visto", "por", "conseguinte", "como", "resultado", "devido", "de", "por causa de", "portanto", "logo", "assim", "então"
    , "conforme", "segundo", "consoante", "tanto", "se", 
    "caso", "certamente", "decerto", "inegavelmente", "indubitavelmente", "enquanto", "durante", "finalmente","a", "o", "as", "os", "um", "uma", "uns", "umas",
    "de", "do", "da", "dos", "das","em", "no", "na", "nos", "nas","para", "por", "com", "sem", "sobre", "entre","e", "ou", "mas", "se", "que", "como",
    "ao", "à", "às", "aos"
    ];
    //separação e junção de frase
    return frase
      .split (" ")
      .filter(palavra => !conectivos.includes(palavra.toLowercase()))
      .join(" ");
}
