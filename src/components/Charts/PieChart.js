import React from 'react'
import Plot from 'react-plotly.js'

const PieChart = ({ data, layout }) => {
  return (
    <Plot
      className="plot"
      data={[{ values: data.values, labels: data.labels, type: 'pie' }]}
      layout={layout}
    />
  )
}

export default PieChart
