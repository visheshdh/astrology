import React from 'react';
import './../scss/WalletBalance.scss';

const WalletBalance = ()=>{
    return (
        <div className="wallet-balance">
            <div>Wallet Balance : &#x20B9; 0</div>
            <div className="wallet-balance-add-money">Add money</div>
        </div>
    )
}

export default WalletBalance;