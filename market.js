// Market budget

let total = 0
let budget = 0


let remmaining= document.getElementById('remainin');
function setBudget() {
    let budget = document.getElementById('budget').value;

    if(budget.trim == '' || budget<= 0) {
        alert('Enter a valid input');
       document.getElementById('budget').value = '';
    }else{
      remmaining.innerHTML = ' ₦' +budget;
       document.getElementById('budget').value = '';

       }
}


function additem(){
    let item = document.getElementById('itemName').value; 
    let price =Number(document.getElementById('itemPrice').value);
    let remmaining= document.getElementById('remainin');

  
    let displayitem = document.getElementById('itemList');
    
    

    if(item .trim() == '' || price<= 0 ||total > remmaining  ){
        alert('Enter a valid input');
    }else{
        displayitem.innerHTML +=
        `<div style="display: flex;  justify-content: space-between; font-size: 30px; color: darkgreen; gap: 20px; " class='item-row'>
            <span>${item}</span> 
             <span> ₦${price}</span>
         </div>`
         


        total += price
       

        document.getElementById('totalSpent').innerHTML = 'Total Spent: ₦' +  total ;

        document.getElementById('itemName').value = '';
        document.getElementById('itemPrice').value = '';
        document.getElementById('emptymessage').style.display= 'none';


        

    }


    
}

