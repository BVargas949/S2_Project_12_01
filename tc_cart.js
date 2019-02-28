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

var cartHTML = "<table> <tr> <th>Item</th> <th>Description</th> <th>Price</th> <th>Qty</th> <th>Total</th> </tr>";

for (var i = 0; i < item.length; i++) {
    cartHTML += "<tr>" + "<td> <img src='tc_item.png' alt='item' /> </td>";
    cartHTML += "<td>" + itemDescription + "</td>" + "<td>" + itemPrice + "</td>" + "<td>" + itemQty + "</td>";
    var itemCost = itemPrice * itemQty;
    cartHTML += "<td>" + itemCost + "</td>" + "</tr>";
    orderTotal += itemCost;
}
cartHTML += "<tr> <td colspan='4'>Subtotal</td> <td>" + orderTotal + "</td> </tr> </table>";

document.getElementById("cart").innerHTML = cartHTML;