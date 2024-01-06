var MaximumCharacters = "100000"; var vs; var MaximumWords = "100000"; var FormName = "myForm"; var TextFieldName = "textarea"; var CharactersTypedFieldName = "CharsTyped"; var CharactersLeftFieldName = "CharsLeft"; var WordsTypedFieldName = "WordsTyped"; var WordsLeftFieldName = "WordsLeft"; var WordsMonitor = 0; var MaxWords = parseInt(MaximumWords); var MaxChars = parseInt(MaximumCharacters); var textfield = 'document.' + FormName + '.' + TextFieldName + '.value'; function WordLengthCheck(s, l) {
    WordsMonitor = 0; var f = false; var ts = String(); for (var vi = 0; vi < s.length; vi++) {
        vs = s.substr(vi, 1); if ((vs >= 'A' && vs <= 'Z') || (vs >= 'a' && vs <= 'z') || (vs >= '0' && vs <= '9')) { if (f === false) { f = true; WordsMonitor++; if ((l > 0) && (WordsMonitor > l)) { s = s.substring(0, ts.length); vi = s.length; WordsMonitor--; } } }
        else { f = false; }
        ts += vs;
    }
    return s;
}
function CharLengthCheck(s, l) {
    if (s.length > l) { s = s.substring(0, l); }
    return s;
}
function InputCharacterLengthCheck() {
    if (MaxChars <= 0) { return; }
    var currentstring = String(); var currentlength = currentstring.length; if (CharactersLeftFieldName.length > 0) {
        var left = 0; if (left < 0) { left = 0; }
    }
}
function InputWordLengthCheck() {
    if (MaxWords <= 0) { return; }
    var currentstring = String(); var currentlength = currentstring.length; if (WordsLeftFieldName.length > 0) {
        var left = MaxWords - WordsMonitor; if (left < 0) { left = 0; }
    }
}
function InputLengthCheck() { InputCharacterLengthCheck(); InputWordLengthCheck(); }


export {
    CharLengthCheck,
    InputCharacterLengthCheck,
    InputWordLengthCheck,
    InputLengthCheck,
    WordLengthCheck
}