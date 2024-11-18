document.addEventListener("DOMContentLoaded", function () {
    // Presale 2 Festival variables
    let ticketCountFestival = document.getElementById("ticket-count");
    let totalPriceFestival = document.getElementById("total-price");
    let priceFestival = 20000;

    // Presale 1 Festival variables
    let ticketCountSuper = document.getElementById("ticket-count-super");
    let totalPriceSuper = document.getElementById("total-price-super");
    let priceSuperFestival = 15000;

    // Update Grand Total
    let grandTotalDisplay = document.getElementById("total");

    // Tombol plus dan minus untuk Presale 2 Festival
    document.getElementById("plus-btn").addEventListener("click", function () {
        ticketCountFestival.value = parseInt(ticketCountFestival.value) + 1;
        calculateTotalFestival();
    });

    document.getElementById("minus-btn").addEventListener("click", function () {
        if (ticketCountFestival.value > 0) {
            ticketCountFestival.value = parseInt(ticketCountFestival.value) - 1;
            calculateTotalFestival();
        }
    });

    // Tombol plus dan minus untuk Presale 1 Festival
    document.getElementById("plus-btn-super").addEventListener("click", function () {
        ticketCountSuper.value = parseInt(ticketCountSuper.value) + 1;
        calculateTotalSuperFestival();
    });

    document.getElementById("minus-btn-super").addEventListener("click", function () {
        if (ticketCountSuper.value > 0) {
            ticketCountSuper.value = parseInt(ticketCountSuper.value) - 1;
            calculateTotalSuperFestival();
        }
    });

    // Fungsi untuk menghitung total harga Festival
    function calculateTotalFestival() {
        let totalFestival = ticketCountFestival.value * priceFestival;
        totalPriceFestival.innerText = `Rp${totalFestival.toLocaleString()}`;
        calculateGrandTotal(); // Update grand total setelah menghitung tiap tipe tiket
    }

    // Fungsi untuk menghitung total harga Super Festival
    function calculateTotalSuperFestival() {
        let totalSuper = ticketCountSuper.value * priceSuperFestival;
        totalPriceSuper.innerText = `Rp${totalSuper.toLocaleString()}`;
        calculateGrandTotal(); // Update grand total setelah menghitung tiap tipe tiket
    }

    // Fungsi untuk menghitung Grand Total (total dari semua tiket)
    function calculateGrandTotal() {
        let grandTotal = (ticketCountFestival.value * priceFestival) + (ticketCountSuper.value * priceSuperFestival);
        grandTotalDisplay.innerText = grandTotal.toLocaleString();
    }
});

// Fungsi placeholder untuk "Next" button
function proceed() {
    alert("Proceeding to the next step.");
}

var text = document.querySelector('.text');

var totalharga = document.querySelector('.totalharga');

var proses = document.querySelector('.proses');

// JavaScript untuk deskripsi acara
function showDescription() {
    document.getElementById('description').classList.toggle('hidden');
    document.querySelector('.tickets').classList.add('hidden');
    text.classList.toggle('hidden');
    totalharga.classList.toggle('hidden');
    proses.classList.toggle('hidden');
}

function showTickets() {
    document.querySelector('.tickets').classList.toggle('hidden');
    document.getElementById('description').classList.add('hidden');
}