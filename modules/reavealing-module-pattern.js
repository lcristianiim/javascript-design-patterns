var invoiceManager = (function () {
    var invoices = ['gas invoice'];
    var privateVariable = 'Im am private';

    function getInvoices () {
        console.log(invoices);
    }

    function addInvoice (item) {
        invoices.push(item);
    }

    return {
        getInvoices: getInvoices,
        addInvoice: addInvoice,
        invoiceVariable: invoices
    }

})();

// Outputs: [ 'gas invoice' ]
invoiceManager.getInvoices();

invoiceManager.addInvoice('phone invoice');

// Outputs: [ 'gas invoice', 'phone invoice' ]
invoiceManager.getInvoices();
