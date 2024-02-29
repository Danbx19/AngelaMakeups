function mostrarInfo(id) {
    var infos = document.getElementsByClassName("info");
    for (var i = 0; i < infos.length; i++) {
        infos[i].computedStyleMap.display = "block";
    }


    var info = document.getElementById(id + "-info");
    info.style.display = "block";
}