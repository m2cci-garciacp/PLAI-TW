function truncate(str,maxlength,endstr="...") 
{
    if (str.length <= maxlength) return str;
    else return str.substring(0, maxlength-endstr.length)+endstr;
}

console.log(truncate("0123456789", 14, "...."));
console.log(truncate("0123456789", 7, "...."));
console.log(truncate("0123456789", 7));