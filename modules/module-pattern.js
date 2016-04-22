var invoiceManager = (function () {
    var self = this;
    var invoices = ['gas invoice'];

    return {
        getInvoices: function() {
            console.log(invoices);
        },
        addInvoice: function (item) {
            invoices.push(item);
        }
    }

})();

// Outputs: [ 'gas invoice' ]
invoiceManager.getInvoices();

invoiceManager.addInvoice('phone invoice');

// Outputs: [ 'gas invoice', 'phone invoice' ]
invoiceManager.getInvoices();
