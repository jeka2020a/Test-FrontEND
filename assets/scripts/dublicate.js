/*
    ANSWER:
    In this function I use cycle , and count of work this cycle = count dublications of some_arr[].
*/

var some_arr = [1,2,3,4,5];
var c = 4;

function dublicate(some_arr , c)
{
    for (let index = 0; index < c; index++) {
        var dublicate__arr = [];

        dublicate__arr[c] = some_arr; 
        dublicate__arr[c].flat(2);

        document.write(dublicate__arr[c]);
    }
}

dublicate(some_arr , c);