"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Bryan Vargas
   Date:   02/27/19
   
   Filename: tc_cart.js
	
*/

// A base variable made to claculate the cost of a customers purchase.
var orderTotal = 0;
// A new base variable that holds the header for the table.
var cartHTML = "<table> <tr> <th>Item</th> <th>Description</th> <th>Price</th> <th>Qty</th> <th>Total</th> </tr>";

//The for loop creating the rest of the table and its contents. The I variable will cycle through all the items in the item variable, one item at a time.
for (var i = 0; i < item.length; i++) {
    // A column containing an image of the item will be added to the table in "cartHTML"
    cartHTML += "<tr>" + "<td> <img src='tc_" + item[i] + ".png' alt='item' /> </td>";

    //three columns containg the description, price, and quantity of the items will be added to the table.
    cartHTML += "<td>" + itemDescription[i] + "</td>" + "<td>" + "$" + itemPrice[i] + "</td>" + "<td>" + itemQty[i] + "</td>";

    //the variable itemCost will hold the price of the seperate items, by multiplying the price of each item and multiplying it by the number of items.
    var itemCost = itemPrice[i] * itemQty[i];

    // the final column with the price of each individual item 
    cartHTML += "<td>" + "$" + itemCost + "</td>" + "</tr>";
    orderTotal += itemCost;
}

//  The table shall close and a total amount will be calculated. 
cartHTML += "<tr> <td colspan='4'>Subtotal</td> <td>" + "$" + orderTotal + "</td> </tr> </table>";

// All the information shall be placed in the HTML DIV with the ID of "cart".
document.getElementById("cart").innerHTML = cartHTML;