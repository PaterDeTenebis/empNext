/*components*/
import THead from './tHead';

function Table() {
    return(
        <table className="table">
            <thead>
                <tr>
                    <THead text="Transaction type" />
                    <THead text="Phase" />
                    <THead text="Transaction ID" />
                    <THead text="Value ($ETOM)" />
                    <THead text="Value (BUSD)" />
                    <THead text="Date" />
                </tr>
            </thead>
            <tbody>
                <tr>
                    <THead text="Buy" />
                    <THead text="IDO" />
                    <THead text="#1212" />
                    <THead text="+100,000" specSpan="textGreen" />
                    <THead text="100" />
                    <THead text="2022-06-03 04:14PM" />
                </tr>
                <tr>
                    <THead text="Sell" />
                    <THead text="IDO" />
                    <THead text="#1212" />
                    <THead text="-100,000" specSpan="textRed" />
                    <THead text="100" />
                    <THead text="2022-06-03 04:14PM" />
                </tr>
                <tr>
                    <THead text="Buy" />
                    <THead text="IDO" />
                    <THead text="#1212" />
                    <THead text="+100,000" specSpan="textGreen" />
                    <THead text="100" />
                    <THead text="2022-06-03 04:14PM" />
                </tr>
                <tr>
                    <THead text="Buy" />
                    <THead text="IDO" />
                    <THead text="#1212" />
                    <THead text="+100,000" specSpan="textGreen" />
                    <THead text="100" />
                    <THead text="2022-06-03 04:14PM" />
                </tr>
                <tr>
                    <THead text="Sell" />
                    <THead text="IDO" />
                    <THead text="#1212" />
                    <THead text="-100,000" specSpan="textRed" />
                    <THead text="100" />
                    <THead text="2022-06-03 04:14PM" />
                </tr>
                <tr>
                    <THead text="Buy" />
                    <THead text="IDO" />
                    <THead text="#1212" />
                    <THead text="+100,000" specSpan="textGreen" />
                    <THead text="100" />
                    <THead text="2022-06-03 04:14PM" />
                </tr>
            </tbody>
        </table>
    )
}

export default Table;