import React, { useState } from "react";
const InvoiceContext = React.createContext();

function  InvoiceProvider (props) {
    
    const [searchCustomer, setSearchCustomer] = useState('');
    const [invoiceNew, setInvoiceNew] = useState(false);
    const [invoiceIdNew, setInvoiceIdNew] = useState(false);
    const [refreshProducts, setRefreshProducts] = useState(false);
    
    return(
        <InvoiceContext.Provider value = {{            
            searchCustomer, setSearchCustomer,
            invoiceNew, setInvoiceNew,
            invoiceIdNew, setInvoiceIdNew,
            refreshProducts, setRefreshProducts
        }} >
            {props.children}
        </InvoiceContext.Provider>
    )
}

export{ InvoiceContext, InvoiceProvider }