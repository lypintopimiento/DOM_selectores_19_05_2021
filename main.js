
window.onload = function (){


    document.getElementById("formulario").addEventListener("submit", function(enevt){
        let json = [];
        Array.from(new FormData(enevt.target)).forEach(i => { 
            json[i[0]] = i[1];
        });
        json = Object.assign({},json);
        console.log(JSON.stringify(json));




        // console.log(this.edad);
        // console.log(enevt.target.elements.edad);
        // document.getElementById(this.edad.attributes.id.value).setAttribute("title","aaaa");
        // document.getElementById(enevt.target.elements.edad.attributes.id.value).setAttribute("title","bbb");
        enevt.preventDefault();
    })



    // const etiqueta = document.getElementById('dirrecion');
    // let title = etiqueta.getAttribute('title');
    // title += " soy miguel como estas \n\tNegrita";
    // etiqueta.setAttribute('title', title);





    // let datos = {
    // };
    // datos.id = document.getElementById('nombre').value;
    // datos.name = document.getElementsByName('nombre')[0].value;
    // datos.clase = document.getElementsByClassName('nombre')[0].value;
    // datos.tagName = document.getElementsByTagName('input')[0].defaultValue;
    // datos.atributo_type = document.querySelector("input[type='text']").value;
    // datos.atributo_clase = document.querySelector(".nombre").value;
    // datos.atributo_id = document.querySelector("#nombre").value;
    // datos.atributo_input = document.querySelector("input").value;
    // datos.atributo_input_2 = document.querySelectorAll("input")[0].value;
    // console.log(datos);


    // datos.name = [];
    // const on = document.getElementsByName('datos');
    // for(id of on){
    //     if (id.checked==true)
    //         datos.name.push(id.value);
    // }
    // console.log(datos.name);
}