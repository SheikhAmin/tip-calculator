const silders = document.querySelectorAll("input[type='range']");
silders.forEach(function(silder){
    silders.addEventListener("input",caculateTip);
});

const billInput = document.getElementById("bill");
billInput.addEventListener("change",caculateTip);

function caculateTip(){
    let bill = parseFloat(billInput.value);
    let tipPercent = document.getElementById("tip").value;
    let noOfPeople = document.getElementById("no-of-people").value;

    billInput.value = bill.toFixed(2);

    let totalTip = parseFloat((bill * (tipPercent/100)).toFixed(2));
    total = parseFloat((bill + totalTip).toFixed(2));

    let tipPerPerson = (totalTip / noOfPeople).toFixed(2);
    let tottalPerPerson = (total / noOfPeople).toFixed(2);

    document.getElementById("tip-ammount").textContent = `\$ ${totalTip}`;
    document.getElementById("total-ammount").textContent = `\$ ${total}`;

    document.getElementById("tip-percent").textContent = `\$ ${tipPercent}`;
    document.getElementById("split-num").textContent = noOfPeople;

    document.getElementById("tip-per-person").textContent = `\$ ${tipPerPerson}`;
    document.getElementById("total-per-person").textContent = `\$ ${totalPerPerson}`;
    

} 
caculateTip();

