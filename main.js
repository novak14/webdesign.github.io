function unhide(divID) {
    var item = document.getElementById(divID);
    console.log('t: ' + JSON.stringify(item));

    var itemWidth = item.width;
    var itemHeight = item.height;
    if (item) {
        if (item.className == 'hidden') {
            item.className = 'unhidden';
            if(divID === 'modric') {
                var text = document.getElementById("winner");
                 
                text.className = 'hidden';
            }
            if(divID === 'ronaldo') {
                var text = document.getElementById("second");
                text.className = 'hidden';
            }
            if(divID === 'griezmann') {
                var text = document.getElementById("third");
                text.className = 'hidden';
            }
        } else {
            item.className = 'hidden';
            if(divID === 'modric') {
                
                var text = document.getElementById("winner");

                text.style.width = itemWidth + "px";
                text.style.height = itemHeight + "px";
                text.className = 'unhidden';
            }
            if(divID === 'ronaldo') {
                var text = document.getElementById("second");
                text.style.width = itemWidth + "px";
                text.style.height = itemHeight + "px";
                text.className = 'unhidden';
            }
            if(divID === 'griezmann') {
                var text = document.getElementById("third");
                text.style.width = itemWidth + "px";
                text.style.height = itemHeight + "px";
                text.className = 'unhidden';
            }
        }
    }
}

function myFunction(t) {
    t.classList.toggle("change");
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
