var licz = n => {
    var suma = 0;
    for(var i = 0; i <= n; i+=7) {
        if(i % 7 === 0) {
            suma += i;
        }
    }
    return suma;
}