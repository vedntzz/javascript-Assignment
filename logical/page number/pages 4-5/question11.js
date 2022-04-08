function max(input){
    if(!Array.isArray(input))
    return false;

    return Math.max.apply(Math,input);
}
document.write(max([12,34,56,1]));
