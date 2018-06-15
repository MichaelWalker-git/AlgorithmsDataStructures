Rainbow Text

Write a function wich takes a string an retuns an HTML string which transitions through colors.
```
(function() {
  let text = document.getElementsByClassName('rainbow-text');
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
  const innerText = text[0].innerText

  const rainbow = (str, colors) =>{
      const divisor = Math.floor(innerText.length / colors.length);
      let counter = 0;
      let colorIndex = 0;
      return str.split('').map((char) => {
        counter ++;
        if(counter > divisor){
          counter = 0;
          colorIndex++;
        }
        const insta = document.createElement('div');
        insta.innerText = char;
        insta.style.color = colors[colorIndex];
        return insta;
      })
  }
  var node = document.createElement("div"); 
  const listOfDivs = rainbow(innerText, colors);
  listOfDivs.forEach((item) => node.appendChild(item));
  node.style.display = 'flex';
  node.style['flex-direction'] = 'row';
  text[0].appendChild(node);
})();

```
