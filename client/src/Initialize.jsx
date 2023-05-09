export default function Initialize() {
    return (
        <div className="initialize">
            <h2>Welcome to ECDSA Simulator!</h2>
            {/* <h5>If you already have a private key...</h5> */}
            <button className="button">Import private key</button>
            {/* <h5>If you don't have a private key...</h5> */}
            <button className="button">New Wallet</button>
        </div>
    );
}
