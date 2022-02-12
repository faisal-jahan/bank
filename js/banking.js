
// deposite event handler

document.getElementById('deposite-btn').addEventListener('click',function(){
    //get the amount deposited
    const dipositeInput = document.getElementById('deposite-input');
    const depositeText = dipositeInput.value;
    const depositeAmount = parseFloat(depositeText);

    // diposite total
    const depositeTotal = document.getElementById('deposite-total')
    const previousDepositeText = depositeTotal.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeText);
    // depositeTotal.innerText = previousDepositeTotal;

    //clear input field
    dipositeInput.value = '';

    //Total Deposite Value
    const newDepositeTotal = previousDepositeTotal + depositeAmount;

    depositeTotal.innerText = newDepositeTotal;

    // Balance Total - Diposite
    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);

    const newBalanceTotal = previousBalanceTotal + depositeAmount;
    balanceTotal.innerText = newBalanceTotal;

});

// -------------------------------------------------

document.getElementById('withdraw-btn').addEventListener('click',function(){
    //get the amount Weposited
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawText);

    // diposite total
    const withdrawTotal = document.getElementById('withdraw-total')
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    // depositeTotal.innerText = previousDepositeTotal;

    //clear input field
    withdrawInput.value = '';

    //Total Deposite Value
    const newWithdrawTotal = previousWithdrawTotal + withdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    // Balance Total - Withdraw
    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);

    const newBalanceTotal = previousBalanceTotal - withdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

});

const nameOfOrganization = document.getElementById("name").value;
   
console.log(nameOfOrganization);
// -------------------------------------------------------

