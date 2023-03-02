import React from 'react'
import Plot from 'react-plotly.js'

const BoxPlot = ({ data, layout }) => {
  return <Plot data={[{ y: data.y, type: 'box' }]} layout={layout} />
}

export default BoxPlot
