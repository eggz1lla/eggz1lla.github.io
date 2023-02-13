const MainPassword = 'ReiIsAmazing';

function HandleSurprise(){
    let password = document.getElementById('pwd').value;

    if(password == MainPassword){
            document.getElementById('SurpriseDiv').style.display = 'block'
            document.getElementById('InputDiv').style.display = 'none'
            document.getElementById('SuccDiv').style.display = 'block'
            document.getElementById('SuccDiv').style.opacity = '100'
    }else{
        document.getElementById('ErrorDiv').style.display = 'block'
        document.getElementById('ErrorDiv').style.opacity = '100'
    }

}