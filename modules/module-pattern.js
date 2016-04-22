var invoiceManager = (function () {
    // This variables are private
    var self = this;
    var invoices = ['gas invoice'];

    // Return an object exposed to the public
    return {
        getInvoices: function() {
            console.log(invoices);
        },
        addInvoice: function (item) {
            invoices.push(item);
        },
        invoice: invoices
    }

})();

// Outputs: [ 'gas invoice' ]
invoiceManager.getInvoices();

invoiceManager.addInvoice('phone invoice');

// Outputs: [ 'gas invoice', 'phone invoice' ]
invoiceManager.getInvoices();
