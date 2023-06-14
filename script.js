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
}