import React from 'react'
import { Chart as ChartJs } from 'chart.js/auto'
import {Doughnut } from "react-chartjs-2"

const doughnutChart = ({data}) => {

  return (
    <Doughnut 
      data = {data} width="100px"
    />
  )
}

export default doughnutChart