$(document).ready(function() {
    $('tr').dblclick(function () {
        var thisElement = $(this);
        var closestLink = thisElement.find("a");
        closestLink[0].click();
    })
});

function createSection(title, bodyId, parentId) {
    var sectionElement = document.createElement("div");
    sectionElement.setAttribute("class", "col-sm-12 col-md-6 col-lg-4 mt-2");
    var cardElement = document.createElement("div");
    cardElement.setAttribute("class", "card");
    sectionElement.appendChild(cardElement);
    var headerElement = document.createElement("div");
    headerElement.setAttribute("class", "card-header");
    headerElement.innerText = title;
    cardElement.appendChild(headerElement);
    var bodyElement = document.createElement("div");
    bodyElement.setAttribute("class", "card-body");
    var tableElement = document.createElement("table");
    tableElement.setAttribute("class", "table table-hover");
    var theadElement = document.createElement("thead");
    var trElement = document.createElement("tr");
    var td1Element = document.createElement("td");
    td1Element.setAttribute("class", "tool-icon-td");
    var td2Element = document.createElement("td");
    var td3Element = document.createElement("td");
    td2Element.innerText = "Name";
    td3Element.innerText = "Link";
    var tbodyElement = document.createElement("tbody");
    tbodyElement.setAttribute("id", bodyId);
    trElement.appendChild(td1Element);
    trElement.appendChild(td2Element);
    trElement.appendChild(td3Element);
    theadElement.appendChild(trElement)
    tableElement.appendChild(theadElement);
    tableElement.appendChild(tbodyElement);
    bodyElement.appendChild(tableElement);
    cardElement.appendChild(bodyElement);
    var parentElement = document.getElementById(parentId);
    parentElement.appendChild(sectionElement);
}

function addLinkToSection(bodyId, name, link, linkText) {
    if (bodyId != null) {
        var bodyElement = document.getElementById(bodyId);

        if (bodyElement != null) {
            var trElement = document.createElement("tr");
            var td1Element = document.createElement("td");
            var iconElement = document.createElement("img");
            iconElement.setAttribute("src", "https://s2.googleusercontent.com/s2/favicons?domain_url=" + link);
            td1Element.appendChild(iconElement);
            var td2Element = document.createElement("td");
            td2Element.innerText = name;
            var td3Element = document.createElement("td");
            var aElement = document.createElement("a");
            aElement.setAttribute("target", "_blank");
            aElement.setAttribute("href", link);
            aElement.innerText = linkText;
            td3Element.appendChild(aElement);
            trElement.appendChild(td1Element);
            trElement.appendChild(td2Element);
            trElement.appendChild(td3Element);
            bodyElement.appendChild(trElement);
        }
    }
}
