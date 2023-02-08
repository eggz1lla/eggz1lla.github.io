let url = "https://health.gov/myhealthfinder/api/v3/itemlist.json?Type=topic";


async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    if (response) {
        hideloader();
    }
    show(data.Result.Items.Item);
}

getapi(url);

function hideloader() {
    document.getElementById('loader-wrapper').style.display = 'none';
}

function show(result){
    let MainPanel = document.getElementById('Medical')

    for(let i = 0; i < result.length; i++){

        let MainDiv = document.createElement('div');
        MainDiv.id = result[i].Type + result[i].Id;
        MainDiv.className = 'SearchName';
        MainPanel.appendChild(MainDiv);

        let h1Tag = document.createElement('h1');
        h1Tag.className = 'entry-title';
        h1Tag.innerText = result[i].Title;
        MainDiv.appendChild(h1Tag);

        let Btn = document.createElement('input');
        Btn.type = 'button';
        Btn.value = 'Click to see more';    
        Btn.className = 'readmore';    
        let value = result[i].Id;
        Btn.onclick = function() { fun_callTopicAPI (value) };
        MainDiv.appendChild(Btn);
    }

}

window.addEventListener('touchstart', function() {
    // some logic
}, {passive:false});



function fun_callTopicAPI(topicID){

    url = "https://health.gov/myhealthfinder/api/v3/topicsearch.json?TopicId=" + topicID;
    sessionStorage.setItem("URL", url);
    window.location.href = "MedicalInfo.html"

}