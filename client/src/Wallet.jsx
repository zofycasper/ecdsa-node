import server from "./server";
import { useState } from "react";

function Wallet({ address, setAddress, balance, setBalance }) {
    // const [isActive, setIsActive] = useState[false];

    async function onChange(evt) {
        const address = evt.target.value;
        setAddress(address);
        if (address) {
            const {
                data: { balance },
            } = await server.get(`balance/${address}`);
            setBalance(balance);
        } else {
            setBalance(0);
        }
    }

    return (
        <div className="container wallet">
            <h1>Your Wallet</h1>

            <label>
                Signature
                <input
                    placeholder="Enter the signature"
                    value={address}
                    onChange={onChange}
                ></input>
            </label>
            <div className="balance">Wallet address: {balance}</div>
            <div className="balance">Balance: {balance}</div>
        </div>
    );
}

export default Wallet;
