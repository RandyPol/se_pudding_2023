import React from 'react'
import Plot from 'react-plotly.js'

const BarGraph = ({ data, layout }) => {
  return <Plot data={[{ x: data.x, y: data.y, type: 'bar' }]} layout={layout} />
}

export default BarGraph
