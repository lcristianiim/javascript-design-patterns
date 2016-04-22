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

invoiceManager.getInvoices();
invoiceManager.addInvoice('phone invoice');
invoiceManager.getInvoices();
