

function RenderInformation(result){
    let MainPanel = document.getElementById('MedicalInfo')
    document.getElementById('HeaderH1').innerText = result[0].Title + " - " + result[0].Categories;


    let img = document.createElement('img');
    img.src = result[0].ImageUrl
    img.alt =  result[0].ImageAlt
    img.height = 300;
    img.width = 300;
    img.classList = 'imageMed';
    MainPanel.appendChild(img);

    for(let r of result[0].Sections.section){
        let MainDiv = document.createElement('div');
        MainDiv.id = 'MedicalInfo'
        MainPanel.appendChild(MainDiv);

        let h1Tag = document.createElement('h1');
        h1Tag.className = 'entry-title';
        h1Tag.innerText = r.Title;
        MainDiv.appendChild(h1Tag);

        let BodyDiv = document.createElement('div');
        BodyDiv.innerHTML = r.Content.toString();
        MainDiv.appendChild(BodyDiv);
    }
}

async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    if (response) {
        hideloader();
    }
    RenderInformation(data.Result.Resources.Resource);
}

getapi(sessionStorage.getItem("URL"));

function hideloader() {
    document.getElementById('loader-wrapper').style.display = 'none';
}


