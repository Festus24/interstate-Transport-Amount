function showOutcome(){
    const accountBalance = Number(document.getElementById('Amount').value)
    let destination;
    
    if( accountBalance >= 0 && accountBalance <= 999){
        destination = 'Work-hard So You Can Leave Your Village'
        outcome.innerHTML = destination
    }
    else if( accountBalance >= 1000 && accountBalance <= 2000){
        destination = 'ILORIN'
        outcome.innerHTML = destination
    }
    else if( accountBalance >=2001 && accountBalance <= 4000){
        destination = 'OYO STATE'
        outcome.innerHTML = destination
    } 
    else if( accountBalance >= 4001 && accountBalance <= 6000){
        destination = 'IBADAN'
        outcome.innerHTML = destination
    }
    else if( accountBalance >=6001 && accountBalance <= 10000){
        destination = 'OGUN STATE'
        outcome.innerHTML = destination
    }
    else if( accountBalance >= 10001 && accountBalance <=20000){
        destination = 'LAGOS STATE'
        outcome.innerHTML = destination
    }
    else if( accountBalance >= 20001 && accountBalance <= 30000){
        destination = 'MINNA'
        outcome.innerHTML = destination
    }
    else if( accountBalance >= 30001 && accountBalance <= 50000){
        destination = 'ABUJA'
    }

    else{ destination = 'Enter A Valid Number (Amount budget should not exceed 50000)'
        outcome.innerHTML = destination
    }
}