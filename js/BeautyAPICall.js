let url = "https://makeup-api.herokuapp.com/api/v1/products.json";


async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    
    var data = await response.json();
    if (response) {
        hideloader();
    }
    show(data);
}

getapi(url);

function hideloader() {
    document.getElementById('loader-wrapper').style.display = 'none';
}


function show(result){
    let MainPanel = document.getElementById('Beauty')
    console.log(result)
    for(let i = 0; i < result.length; i++){
        let MainDiv = document.createElement('div');
        MainDiv.className = 'product_section'
        MainPanel.appendChild(MainDiv);

        let Div = document.createElement('div');
        Div.className = 'product';
        MainDiv.appendChild(Div);

        let a = document.createElement('a');
        a.href = result[i].product_link;
        a.target = '_blank'
        Div.appendChild(a)

        Div = document.createElement('div')
        Div.className = 'panel-body';
        a.appendChild(Div);

        let Div2 = document.createElement('div')
        Div2.className = 'product_image'
        Div.appendChild(Div2)

        let img = document.createElement('img');
        img.src = result[i].image_link
        img.alt =  result[i].name
        img.classList = 'imgPro';
        Div2.appendChild(img);

        Div2 = document.createElement('div')
        Div.appendChild(Div2)

        let h3 = document.createElement('h3')
        h3.innerHTML = result[i].brand
        Div2.appendChild(h3)

        let h4 = document.createElement('h4')
        h4.innerHTML = result[i].name
        Div2.appendChild(h4)

        let p = document.createElement('p')
        p.className = 'bold'
        p.innerHTML = 'Category: ' + result[i].category == null ? '-' : result[i].category
        Div2.appendChild(p)

        p = document.createElement('p')
        p.innerHTML =  result[i].price_sign +  result[i].price
        Div2.appendChild(p)


        let Div3 = document.createElement('div')
        Div3.className = 'colour_section'
        Div.appendChild(Div3)

        p = document.createElement('p')
        p.innerHTML = 'Good To know: '
        Div3.appendChild(p)

        for(let j = 0; j < result[i].tag_list.length; j++){
            let TDiv = document.createElement('Div')   
            TDiv.style = 'height: 20px; margin: 0 3px 3px 3px;'
            TDiv.innerHTML += result[i].tag_list[j].toString();
            Div3.appendChild(TDiv)
        }


        Div2 = document.createElement('div')
        Div2.className = 'colour_section'
        Div.appendChild(Div2)


        for(let j = 0; j < result[i].product_colors.length; j++){
            Div = document.createElement('div')
            Div.className = 'color'
            Div.style = 'height: 20px; margin: 0 3px 3px 3px; background-color:' +  result[i].product_colors[j].hex_value + ';'
            Div2.appendChild(Div)
        }

    }


}

window.addEventListener('touchstart', function() {
    // some logic
}, {passive:false});



function fun_callProductAPI(ProductID){

    url = "https://health.gov/myhealthfinder/api/v3/topicsearch.json?TopicId=" + topicID;
    sessionStorage.setItem("URL", url);
    window.location.href = "MedicalInfo.html"

}