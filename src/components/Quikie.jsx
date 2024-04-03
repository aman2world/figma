import React from 'react'
// import google from '../assets/google.png'

function Quikie() {
  return (
    <>
    <div>

      {/* HEADER */}
      <div className="main1">
          <h1>Quikie</h1>
      </div>

      {/* BOXES */}
      <div>
        <div className="boxes">
            <div className="box">
                <h6>GOOGLE</h6>
                <h1>1515 USD</h1>
            </div>
            <div className="box-mid">
                <h6>FACEBOOK</h6>
                <h1>266 USD</h1>
            </div>
            <div className="box">
                <h6>AMAZON</h6>
                <h1>3116 USD</h1>
            </div>
        </div>
      </div>

      {/* TABLE */}
      <div className= "body">
           <h6>Stock Details Table</h6>
           <div className="table">
                <div className="search">
                    <input type="search" />
                </div>

                <div className="head">
                    <p className="tr-1">COMPANY NAME</p>
                    <p className="icon">SYMBOL</p>
                    <p className="tr-1">MARKET CAP</p>
                    <p className="tr-1">CURRENT PRICE</p>
                </div>
                <div className="row">
                    <p className="tr-1">141 Capital Inc</p>
                    <p className="icon">ONCP</p>
                    <p className="tr-1">$145.4k</p>
                    <button className="btn1">View</button>
                    <p className="tr-1">$0.001 <br/> <span>USD</span></p>
                </div>
                <div className="row">
                    <p className="tr-1">Cardilytics Inc</p>
                    <p className="icon">CDLX</p>
                    <p className="tr-1">$1.88</p>
                    <button className="btn2">Save Data</button>
                    <p className="tr-1">$66 <br/>USD</p>
                </div>
                <div className="row">
                    <p className="tr-1">Brightcov Inc</p>
                    <p className="icon">BCOV</p>
                    <p className="tr-1">$394M</p>
                    <button className="btn2">Save Data</button>
                    <p className="tr-1">$10 <br/>USD</p>
                </div>
                <div className="row">
                    <p className="tr-1">BigString Crop</p>
                    <p className="icon">BSGC</p>
                    <p className="tr-1">$543k</p>
                    <button className="btn1">View</button>
                    <p className="tr-1">$0.003 <br /> USD</p>
                </div>
                <div className="row">
                    <p className="tr-1">Acamai Technology Inc</p>
                    <p className="icon">AKAM</p>
                    <p className="tr-1">$145.4K</p>
                    <button className="btn2">Save Data</button>
                    <p className="tr-1">$0.003 <br /> USD</p>
                </div>
                <div className="foot">
                    <p>1-5 of 276</p>
                </div>
            </div>
           <div className="footer"></div>
      </div>
    </div>
    </>
  )
}

export default Quikie
