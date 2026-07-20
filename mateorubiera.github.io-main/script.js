var titleSize = 0;

setInterval(incTitleSize, 50);

function incTitleSize(){
    document.getElementById("title").style.fontSize = (titleSize + "px");
    titleSize += 1;

    if (titleSize > 40){
        titleSize = 0;
    }

    return titleSize;
}