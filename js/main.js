$(document).ready(function() {
    $('tr').dblclick(function () {
        var thisElement = $(this);
        var closestLink = thisElement.find("a");
        closestLink[0].click();
    })
});

function createSection(title, bodyId, parentId) {
    var sectionElement = document.createElement("div");
    sectionElement.setAttribute("class", "col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-2 equal-height-col");
    var cardElement = document.createElement("div");
    cardElement.setAttribute("class", "card");
    sectionElement.appendChild(cardElement);

    var headerElement = document.createElement("div");
    headerElement.setAttribute("class", "card-header d-flex justify-content-between align-items-center");

    var titleSpan = document.createElement("span");
    titleSpan.innerText = title;
    headerElement.appendChild(titleSpan);

    var chevronDown = "<span style='font-size:1.2em;'>&#x25BC;</span>";
    var chevronRight = "<span style='font-size:1.2em;'>&#x25B6;</span>";
    var toggleBtn = document.createElement("button");
    toggleBtn.setAttribute("type", "button");
    toggleBtn.setAttribute("class", "btn btn-sm btn-outline-secondary");
    toggleBtn.innerHTML = chevronDown;
    headerElement.appendChild(toggleBtn);

    cardElement.appendChild(headerElement);

    var bodyElement = document.createElement("div");
    bodyElement.setAttribute("class", "card-body");
    bodyElement.style.display = "block";

    var tableElement = document.createElement("table");
    tableElement.setAttribute("class", "table table-hover");
    var tbodyElement = document.createElement("tbody");
    tbodyElement.setAttribute("id", bodyId);
    tableElement.appendChild(tbodyElement);
    bodyElement.appendChild(tableElement);
    cardElement.appendChild(bodyElement);

    toggleBtn.addEventListener("click", function() {
        if (bodyElement.style.display === "none") {
            bodyElement.style.display = "block";
            cardElement.style.height = "100%";
            toggleBtn.innerHTML = chevronDown;
        } else {
            bodyElement.style.display = "none";
            cardElement.style.height = "auto";
            toggleBtn.innerHTML = chevronRight;
        }
    });

    var parentElement = document.getElementById(parentId);
    parentElement.appendChild(sectionElement);
}

function addLinkToSection(bodyId, name, link) {
    if (bodyId != null) {
        var bodyElement = document.getElementById(bodyId);

        if (bodyElement != null) {
            var trElement = document.createElement("tr");
            var td1Element = document.createElement("td");
            td1Element.setAttribute("class", "tool-icon-td");
            var iconElement = document.createElement("img");
            iconElement.setAttribute("src", "https://s2.googleusercontent.com/s2/favicons?domain_url=" + link);
            td1Element.appendChild(iconElement);
            var td2Element = document.createElement("td");
            td2Element.innerText = name;
            var td3Element = document.createElement("td");
            td3Element.setAttribute("class", "tool-link-td");
            var aElement = document.createElement("a");
            aElement.setAttribute("target", "_blank");
            aElement.setAttribute("href", link);
            aElement.setAttribute("class", "tool-link-a")
            aElement.innerText = "🔗";
            td3Element.appendChild(aElement);
            trElement.appendChild(td1Element);
            trElement.appendChild(td2Element);
            trElement.appendChild(td3Element);
            bodyElement.appendChild(trElement);
        }
    }
}