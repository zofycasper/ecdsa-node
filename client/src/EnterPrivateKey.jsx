import { useState } from "react";

export default function EnterPrivateKey() {
    return (
        <div className="container wallet">
            <h1>Import your private key:</h1>

            <label>
                Private Key:
                <input placeholder="Type an address, for example: 0x1"></input>
            </label>

            {/* <div className="balance">Balance: {balance}</div> */}
        </div>
    );
}
