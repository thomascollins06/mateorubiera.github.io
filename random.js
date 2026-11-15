const allPages = ["writings/carpe-diem.html",
                  "writings/congregation.html",
                  "writings/letter.html",
                  "writings/neogenesis.html",
                  "writings/popcorn.html", 
                  "writings/xanadu.html", 
                  "chatroom.html", 
                  "index.html",
                  "links.html",
                  "writings.html",
                  "other/crossword.html",
                  "other/malcolm.html",
                  "other/qotd.html"];

randPage();

function randPage(){
    randInt = Math.floor(Math.random() * allPages.length);
    document.getElementById("random").setAttribute("href", allPages[randInt]);
}
