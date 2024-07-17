/* ini Javascripts */
function updateResult(){
    /*menggunakan query selectoor 
    let beratBadan = document.querySelector('#input-berat-badan').value;
     document.querySelector('#bmi-result').innerHTML = beratBadan;
Note
     console.log(parseInt(beratBadan) +10);
    menggunakan inner HTML 
      let beratBadan = document.getElementById('input-berat-badan').value;
    document.getElementById('bmi-result').innerHTML = beratBadan;
    console.log(parseInt(beratBadan) +10);
}

    # id 
    . class


    standar
        let beratBadan = document.getElementById('input-berat-badan').value;
    if (beratBadan != null && beratBadan != '' ){
        document.getElementById('bmi-result').innerHTML = beratBadan;

    }else {
        alert('Inputan kosong')
    }

    ternary oprator

    let beratBadan = document.getElementById('input-berat-badan').value;
    beratBadan != null && beratBadan != ''
        ? document.getElementById('bmi-result').innerHTML = beratBadan
        : alert('Inputan kosong');
    */
 
        let beratBadan = document.getElementById('input-berat-badan').value;
        if (beratBadan != null && beratBadan != '' ){
            document.getElementById('bmi-result').innerHTML = beratBadan;
    
        }else {
            alert('Inputan kosong')
        }
       
}