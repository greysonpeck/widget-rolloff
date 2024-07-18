


var acc = document.getElementsByClassName("accordion");

fetch("../data/YardWaste_Items.json")
    .then((response) => response.json())
    .then((data) => showInfo(data))
    .catch((error) => console.log(error));

function showInfo(data) {
    let ourItems = data.items;
    let itemGroup = document.getElementsByClassName("item-group");

    for (let containers = 0; containers < itemGroup.length; containers++) {
        console.log("On Container #" + containers);

        for (let i = 0; i < ourItems.length; i++) {
            var itemName = document.createElement("h3");
            itemName.innerText = ourItems[i].name;

            console.log("Making Card #" + i);
            // Make card
            var card = document.createElement("div");
            card.classList.add("item-info", "rounded-sm", "p-4", "ring-1", "ring-gray-300");
            itemGroup[containers].appendChild(card);

            // Add header container
            var containHeader = document.createElement("div");
            containHeader.classList.add("item-header", "flex");
            card.appendChild(containHeader);

            // Add header
            var cardHeader = document.createElement("h3");
            cardHeader.classList.add("font-bold", "text-lg", "mb-2", "w-full");
            cardHeader.innerText = ourItems[i].name;
            containHeader.appendChild(cardHeader);

            // Add price
            var cardPrice = document.createElement("span");
            cardPrice.classList.add("font-base");
            cardPrice.innerText = ourItems[i].price;
            containHeader.appendChild(cardPrice);

            // Add description
            var cardDesc = document.createElement("p");
            cardDesc.classList.add("item-desc", "mb-2", "text-sm", "text-gray-600");
            cardDesc.innerText = ourItems[i].description;
            card.appendChild(cardDesc);

            // Insert Submit button
            var cardSubmit = document.createElement("button");
            cardSubmit.classList.add(
                "button-select",
                "rounded-md",
                "border-[1px]",
                "border-emerald-700",
                "text-emerald-700",
                "mt-2",
                "py-1",
                "px-5",
                "hover:bg-gray-50"
            );
            cardSubmit.innerText = "Select";
            card.appendChild(cardSubmit);
        }
    }
}

var acc = document.getElementsByClassName("accordion");
// console.log(acc);

var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var itemGroup = this.nextElementSibling;
        if (itemGroup.style.display === "flex") {
            itemGroup.style.display = "none";
        } else {
            itemGroup.style.display = "flex";
        }
    });
}

// Whenever you click on an accordion...
// 1. Get "id" attribute.
// 2. Match "id" value to CSV Name (e.g. "yard-waste" to "YW_Rollloffs.csv")
// 3. Open CSV, get number of lines in CSV
// 4. For each line, Create a div and a header
// 5..iterate with unique DataTransfer.
