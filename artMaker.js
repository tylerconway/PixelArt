window.onload = function(){
    
     //globally listens for mouse downness
     let mouseIsDown = false;

     window.addEventListener('mousedown', function(){
         mouseIsDown = true;
     });
 
     window.addEventListener('mouseup', function(){
         mouseIsDown = false;
     });
    
    //Create main grid
    let container = document.querySelector('#canvas');
    container.style.gridTemplate = 'repeat(20, 1fr) / repeat(20, 1fr)'

    for(let i = 0; i < 400; i++) {
        let box = document.createElement('span');
        box.style.border = '1px solid black';

    container.appendChild(box);
    }

    document.body.appendChild(container);

    //define active color
    let activeColor = 'red';


    let clickBoxes = document.querySelectorAll('span');
    //for each element in this array, add event listener and change to active color on click.
    for (let clickBox of clickBoxes){
        clickBox.addEventListener('click', function(event) {
            clickBox.style.backgroundColor = activeColor;
          })
    }
   //create color pallet 
    let colorChoices = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    for(let color of colorChoices) {    

    let palletContainer = document.querySelector('#pallet');
    palletContainer.style.gridTemplate = 'repeat(1, 1fr) / repeat(6, 1fr)'

    let palletPicker = document.querySelector('#picker');
    palletPicker.style.gridTemplate = 'repeat(1, 1fr) / repeat(1, 1fr)'


    for(let i = 0; i < 6; i++) {
        let palletBox = document.createElement('span');
        palletBox.style.backgroundColor = colorChoices[i];

        palletBox.addEventListener('mouseenter', function() {
            if (mouseIsDown) 
            {palletBox.style.backgroundColor = activeColor;
            }})
    
    //if particular palletBox is clicked, change the activeColor to whatever background color was clicked
    palletBox.addEventListener('click', function(event) {
        activeColor = palletBox.style.backgroundColor;
        })


    
    //if custom color is chosen, change the activeColor to whatever background color was clicked
    palletPicker.addEventListener('click', function(event) {
        activeColor = palletPicker.style.backgroundColor;
        })    



    palletContainer.appendChild(palletBox);
    palletPicker.appendChild(palletContainer);
    }

    document.body.appendChild(palletContainer);
    document.body.appendChild(palletPicker);
    }


  }