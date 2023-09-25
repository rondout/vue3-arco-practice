export const swimlineData = [
  {
    id: '1',
    shape: 'lane',
    width: 200,
    height: 500,
    position: {
      x: 60,
      y: 60
    },
    label: 'first'
  },
  {
    id: '2',
    shape: 'lane',
    width: 200,
    height: 500,
    position: {
      x: 260,
      y: 60
    },
    label: 'second'
  },
  {
    id: '3',
    shape: 'lane',
    width: 200,
    height: 500,
    position: {
      x: 460,
      y: 60
    },
    label: 'third'
  },
  {
    id: '4',
    shape: 'lane',
    width: 200,
    height: 500,
    position: {
      x: 660,
      y: 60
    },
    label: 'fifth'
  },
  {
    id: '41',
    shape: 'lane',
    width: 200,
    height: 500,
    position: {
      x: 860,
      y: 60
    },
    label: 'sixth'
  },
  {
    id: '5',
    shape: 'lane-rect',
    width: 100,
    height: 60,
    position: {
      x: 110,
      y: 120
    },
    label: 'Start1',
    attrs: {
      body: {
        rx: 30,
        ry: 30
      }
    },
    parent: '2'
  },
  {
    id: '6',
    shape: 'lane-rect',
    width: 100,
    height: 60,
    position: {
      x: 320,
      y: 120
    },
    label: 'Process',
    parent: '2'
  },
  {
    id: '7',
    shape: 'lane-polygon',
    width: 80,
    height: 80,
    position: {
      x: 520,
      y: 110
    },
    label: 'Judge',
    parent: '3'
  },
  {
    id: '8',
    shape: 'lane-rect',
    width: 100,
    height: 60,
    position: {
      x: 510,
      y: 240
    },
    label: 'Process',
    parent: '3'
  },
  {
    id: '9',
    shape: 'lane-rect',
    width: 100,
    height: 60,
    position: {
      x: 720,
      y: 240
    },
    label: 'Process',
    parent: '4'
  },
  {
    id: '10',
    shape: 'lane-rect',
    width: 100,
    height: 60,
    position: {
      x: 720,
      y: 350
    },
    label: 'Process',
    parent: '4'
  },
  {
    id: '11',
    shape: 'lane-polygon',
    width: 80,
    height: 80,
    position: {
      x: 520,
      y: 340
    },
    label: 'Judge',
    parent: '3'
  },
  {
    id: '12',
    shape: 'lane-rect',
    width: 100,
    height: 60,
    position: {
      x: 510,
      y: 470
    },
    label: 'Process',
    parent: '3'
  },
  {
    id: '13',
    shape: 'lane-rect',
    width: 100,
    height: 60,
    position: {
      x: 300,
      y: 470
    },
    label: 'End',
    attrs: {
      body: {
        rx: 30,
        ry: 30
      }
    },
    parent: '2'
  },
  {
    id: '14',
    shape: 'lane-edge',
    source: '5',
    target: '6'
  },
  {
    id: '15',
    shape: 'lane-edge',
    source: '6',
    target: '7'
  },
  {
    id: '16',
    shape: 'lane-edge',
    source: '7',
    target: '8',
    label: 'Yes'
  },
  {
    id: '17',
    shape: 'lane-edge',
    source: '7',
    target: '9',
    label: 'No'
  },
  {
    id: '18',
    shape: 'lane-edge',
    source: '8',
    target: '9'
  },
  {
    id: '19',
    shape: 'lane-edge',
    source: '9',
    target: '10'
  },
  {
    id: '20',
    shape: 'lane-edge',
    source: '10',
    target: '11'
  },
  {
    id: '21',
    shape: 'lane-edge',
    source: '11',
    target: '12',
    label: 'Yes'
  },
  {
    id: '22',
    shape: 'lane-edge',
    source: '11',
    target: '13',
    label: 'No'
  },
  {
    id: '23',
    shape: 'lane-edge',
    source: '12',
    target: '13'
  }
]
