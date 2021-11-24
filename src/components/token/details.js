import React from "react"
import "./details.scss"
import { Typography } from "antd"

import ticker from "../../images/token/ticker.svg"
import name from "../../images/token/name.svg"
import type from "../../images/token/type.svg"
import price from "../../images/token/price.svg"
import circulating from "../../images/token/circulating.svg"
import total from "../../images/token/total.svg"
import contract from "../../images/token/contract.svg"

const { Paragraph } = Typography

const Details = () => {
  return (
    <div className="tokenDetails container">
      <h2>What is $ORBIT?</h2>
      <div className="coinStats">
        <table>
          <tr>
            <td><img src={ticker} alt="Ticker" />Ticker</td>
            <td>$ORBIT</td>
          </tr>
          <tr>
            <td><img src={name} alt="Name" />Name</td>
            <td>Orbit</td>
          </tr>
          <tr>
            <td><img src={type} alt="Type" />Type</td>
            <td>ERC20</td>
          </tr>
          {/*<tr>*/}
          {/*  <td><img src={price} alt="Price" />Initial Price</td>*/}
          {/*  <td>$0.01</td>*/}
          {/*</tr>*/}
          <tr>
            <td><img src={circulating} alt="Circulating" />Circulating Supply</td>
            <td>30,000,000</td>
          </tr>
          <tr>
            <td><img src={total} alt="Total" />Total Supply</td>
            <td>100,000,000</td>
          </tr>
          {/*<tr>*/}
          {/*  <td><img src={contract} alt="Contract" />Contract Address</td>*/}
          {/*  <td>*/}
          {/*    <Paragraph copyable={{ text: "0xbd4a858139b155219e2c8d10135003fdef720b6b" }}>0xbd...b6b</Paragraph>*/}
          {/*  </td>*/}
          {/*</tr>*/}
        </table>
      </div>
    </div>
  )
}

export default Details
