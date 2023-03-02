import React from 'react'
import Plot from 'react-plotly.js'

const PieChart = ({ data, layout }) => {
  return (
    <Plot
      data={[{ values: data.values, labels: data.labels, type: 'pie' }]}
      layout={layout}
    />
  )
}

export default PieChart
