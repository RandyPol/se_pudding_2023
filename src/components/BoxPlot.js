import React from 'react'
import Plot from 'react-plotly.js'

const BoxPlot = ({ data, layout }) => {
  return (
    <Plot
      className="plot"
      data={[{ y: data.y, type: 'box' }]}
      layout={layout}
    />
  )
}

export default BoxPlot
