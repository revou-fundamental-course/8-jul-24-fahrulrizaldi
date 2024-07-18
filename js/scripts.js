/* ini Javascripts */

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

function updateResult(){

        let beratBadan = document.getElementById('input-berat-badan').value;
        let tinggiBadan = document.getElementById('tinggi-badan').value;
        let usia = document.getElementById('usia').value;

        const tinggiBadanbmi = parseInt(tinggiBadan)/100;
        const beratIdeal = parseInt(beratBadan) / (tinggiBadanbmi * tinggiBadanbmi) ;
       

        if (beratIdeal< 18.5){
            document.getElementById('bmi-result-judul').innerHTML = "Berat Badan Kurang";
            document.getElementById('bmi-result').innerHTML = beratIdeal.toFixed(1);
            document.getElementById('bmi-result-keterangan').innerHTML = "Anda Memiliki Kekurangan Berat Badan<br><br>"
            + "<button class='button submit' type='button' onclick='#'>Download Hasil BMI</button>";
            document.getElementById('article-hasil').innerHTML = "Hasil BMI kurang dari 18.5";
            + "Anda berada dalam kategori kekurangan berat badan ."
            + "<br>direkomendasikan untuk mengkonsumsi konsumsi  makanan bergizi dan ber nutrisi tinggi. " ;
        }else if (beratIdeal >18.5 && beratIdeal < 24.9) {
            document.getElementById('bmi-result-judul').innerHTML = "Berat Badan Normal";
            document.getElementById('bmi-result').innerHTML = beratIdeal.toFixed(1);
            document.getElementById('bmi-result-keterangan').innerHTML = "Anda Memiliki Berat Badan Normal <br><br>"
            + "<button class='button submit' type='button' onclick='#'>Download Hasil BMI</button>";
            document.getElementById('article-hasil').innerHTML = "Hasil BMI berada diantara 18.5 dan 24.9 <br><br>"
            
            + "Anda berada dalam kategori berat badan Normal."
            + "<br>pertahankan untuk selalu   mengatur  makanan yang dikonsumsi dan rajin berolahraga. " ;
        }else if (beratIdeal >25 && beratIdeal < 29.9) {
            document.getElementById('bmi-result-judul').innerHTML = "Berat Badan Anda Berlebih";
            document.getElementById('bmi-result').innerHTML = beratIdeal.toFixed(1);
            document.getElementById('bmi-result-keterangan').innerHTML = "Anda Memiliki Berat Badan Berlebih </br></br>"
            + "<button class='button submit' type='button' onclick='#'>Download Hasil BMI</button>";
             document.getElementById('article-hasil').innerHTML = "Hasil BMI berada diantara 25 dan 29.9 <br><br>  Anda berada dalam kategori overweight atau berat badan berlebih. <br>cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga. <br> Jika BM anda berada dalam kategori ini maka anda dianjurkan untuk menurunkan berat badan hingga batas normal <br><br>" + 
            "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dari kesehatan tubuh dan resiko penyakit seseorang. <br> anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran anda terkait dengan berat badan anda" ;

            }else if (beratIdeal > 30) {
            document.getElementById('bmi-result-judul').innerHTML = "Berat Badan Anda Sangat Berlebih";
            document.getElementById('bmi-result').innerHTML = beratIdeal.toFixed(1);
            document.getElementById('bmi-result-keterangan').innerHTML = "Anda Memiliki Berat Badan Sangat Berlebih </br></br>"
            + "<button class='button submit' type='button' onclick='#'>Download Hasil BMI</button>";
             document.getElementById('article-hasil').innerHTML = "Hasil BMI lebih dari 30 </br></br>" 
              + "Segera Cek ke dokter.";
             
        }
        
}