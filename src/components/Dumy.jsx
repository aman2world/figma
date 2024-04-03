import React from 'react'

function Dumy() {
  return (
    <div>
    {/* HEADER */}
    <div className="main1">
    <h1>Quikie</h1>
</div>

{/* BOXES */}
<div>
  <div className="boxes">
      <div className="box">
        <div className="box-p">
        <h6>GOOGLE</h6>
        <div className="img1"></div>
        </div>
        <div className="box-h"><h1>1515 USD</h1></div>
    </div>
    <div className="box-mid">
        <div className="box-p">
        <h6>FACEBOOK</h6>
        <div className="img2"></div>
        </div>
        <div className="box-h"><h1>266 USD</h1></div>
    </div>
    <div className="box">
        <div className="box-p">
        <h6>AMAZON</h6>
        <div className="img3"></div>
        </div>
        <div className="box-h"><h1>3116 USD</h1></div>
    </div>
  </div>
</div>
    <div className="body">
        <h6>Stock Details Table</h6>
          <div className="table">
               <div className="search">
                    <input type="search" />
                </div>


        <table className="row"> 
            <thead className="head">
                <tr>
                    <th>COMPANY NAME</th>
                    <th>SYMBOL</th>
                    <th>MARKET CAP</th>
                    <th>CURRENT PRICE</th>
                </tr>
            </thead>
            <tbody className="col">
                <tr>
                    <td>141 Capital Inc</td>
                    <td className="icon">ONCP</td>
                    <td>$145.4k</td>
                    <td className="btn1">View</td>
                    <td>$0.001 USD</td>
                </tr>
            </tbody>
            <tbody className="col">
                <tr>
                    <td>Cardilytics Inc</td>
                    <td className="icon">CDLX</td>
                    <td>$1.88</td>
                    <td className="btn2">Save Data</td>
                    <td>$66 USD</td>
                </tr>
            </tbody>
            <tbody className="col">
                <tr>
                <td>Brightcov Inc</td>
                <td className="icon">BCOV</td>
                <td>$394M</td>
                <td className="btn2">Save Data</td>
                <td>$10 USD</td>
                </tr>
            </tbody>
            <tbody className="col">
                <tr>
                <td>BigString Crop</td>
                <td className="icon">BSGC</td>
                <td>$543k</td>
                <td className="btn1">View </td>
                <td> $0.003 USD</td>
                </tr>
            </tbody>
            <tbody className="col">
                <tr>
                <td>Acamai Technology Inc</td>
                <td className="icon">AKAM</td>
                <td>$145.4K</td>
                <td className="btn2">Save Data </td>
                <td>$0.003 USD</td>
                </tr>
            </tbody>
        </table>
        <div className="foot">
                    <p>1-5 of 276</p>
            </div>
        <div className="footer"></div>
    </div>
    </div>
    </div>
  )
}

export default Dumy
