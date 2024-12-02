"use strict";

/*
    ANSWER: 
    I create small algoritme , which in first step sort array, and after just check element's, which have duplicates.
    Code check element which placed before main element (mas[index]):
        if(mas[subindex] == mas[index]);
    
        ... and if condition return true , else construction return unique numbers.
*/

var mas = [1,2,3,3,9,5,6,6,7,8,9,9,0];

mas.sort();

function unique(mas)
{
    for (let index = 0; index < mas.length; index++) {
        var subindex = index - 1;

        if(mas[subindex] == mas[index]);
        else
        {
            document.write(mas[index] + "   ");
        }
    }
}

unique(mas);

