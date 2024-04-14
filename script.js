// Function to add a new row to the table
function addRow() {
    const tableBody = document.getElementById("tableBody");
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${tableBody.children.length + 1}</td>
        <td><input type="text" class="item-input" style="width:200px"padding:16px;></td>
        <td><input type="text" class="item-input"style="width:150px"></td>
        <td><input type="number" class="item-input"style="width:80px"></td>
        <td><input type="number" class="item-input"style="width:80px"></td>
        <td><input type="number" class="quantity-input"style="width:90px"></td>
        <td><input type="number" class="price-input"style="width:50px"></td>
        <td><img onclick="removeRow(this)" src="../Icons/Close - Print tab.svg" style="curser:pointer;width:30px;height:30px;border:none"></button></td>
    `;
    tableBody.appendChild(newRow);
}

// Function to remove a row from the table
function removeRow(img) {
    const row = img.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Add event listener to the Add Row button
document.getElementById("addButton").addEventListener("click", addRow);

//this span
// Function to generate printable bill details
function generatePrintableBill() {
    const printableBill = document.getElementById("printableBill");
    const table = document.getElementById("tableBody");
    let billContent = "<h2 class='span'>Bill Details</h2>";
    
    // Iterate through each row in the table
    for (let i = 0; i < table.children.length; i++) {
        const row = table.children[i];
        const cells = row.children;

        // Extract data from each cell and append to the bill content
        const srNo = cells[0].textContent;
        const itemName = cells[1].querySelector("input").value;
        const itemCode = cells[2].querySelector("input").value;
        const quantity = cells[3].querySelector("input").value;
        const price = cells[4].querySelector("input").value;
        const total = cells[5].querySelector("input").value;
        const totalWithoutTaxes = cells[6].querySelector("input").value;

        billContent += `
            <p class='span'><strong>Sr No:</strong> ${srNo}</p>
            <p class='span'><strong>Item Name:</strong> ${itemName}</p>
            <p class='span'><strong>Item Code:</strong> ${itemCode}</p>
            <p class='span'><strong>Quantity:</strong> ${quantity}</p>
            <p class='span'><strong>Price:</strong> ${price}</p>
            <p class='span'><strong>Total:</strong> ${total}</p>
            <p class='span'><strong>Total (Without Taxes):</strong> ${totalWithoutTaxes}</p>
        `;
    }

    // Set the generated bill content to the printableBill element
    printableBill.innerHTML = billContent;
}

// Add event listener to the "Generate Printable Bill" button
document.getElementById("generatePrintableBillButton").addEventListener("click", generatePrintableBill);

//total bill