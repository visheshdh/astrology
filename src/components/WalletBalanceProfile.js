import React from 'react';
import './../scss/WalletBalanceProfile.scss';

const WalletBalanceProfile = ()=>{
    return (
        <div className="wallet-balance-profile">
            <div>Wallet Balance : &#x20B9; 0</div>
            <div className="wallet-balance-add-money">Add money</div>
        </div>
    )
}

export default WalletBalanceProfile;