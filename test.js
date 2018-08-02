function outer(){
    var a = 'a';
    var b = 'B';

    function inner(){
        var a = 'b';
        console.log(b);
    }
    return inner
}

var some = outer();
some();

