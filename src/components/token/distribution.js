import React, { useState } from "react"
import { Col, Row } from "antd"
import { PieChart, Pie, ResponsiveContainer, Sector } from 'recharts';
import "./distribution.scss"

const data = [
  { name: 'Team Allocation', value: 100000000 },
  { name: 'Liquidity Reserve', value: 250000000 },
  { name: 'Development', value: 400000000 },
  { name: 'Marketing', value: 250000000 },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#0a0a0a">{`${value.toLocaleString()}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#0a0a0a">
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const Distribution = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (e, index) => {
    setActiveIndex(index);
  }

  return (
    <section className="tokenDistribution container">
      <Row>
        <Col lg={12}>
          <h2>Token Distribution ($SAR)</h2>
          <p>There will be no private or public sale to avoid whales from accumulating a big chunk of the supply. Token will be launched straight to Uniswap to give everyone a fair chance at buy the token.</p>
          <ul className="details">
            <li><span>Total Supply </span><span>1,000,000,000</span></li>
            <li><span>Total Liquidity Reserves</span><span>250,000,000</span></li>
            <li><span>Initial Uniswap Listing <sup>1</sup></span><span>30,000,000</span></li>
            <li><span>Team Allocation</span><span>100,000,000</span></li>
            <li><span>Development</span><span>400,000,000</span></li>
            <li><span>Marketing</span><span>250,000,000</span></li>
          </ul>
          <br/>
          <span><strong>1:</strong> Initial Uniswap listing supply is part of total liquidity reserves</span>
        </Col>
        <Col lg={12}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#FF6366"
                dataKey="value"
                onMouseEnter={onPieEnter}
              />
            </PieChart>
          </ResponsiveContainer>
        </Col>
      </Row>
    </section>
  )
}

export default Distribution
