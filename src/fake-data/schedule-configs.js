export default {
  timeTable: {
    week: {
      0: ['7:30', '8:00', '8:30', '9:00', '9:30'],
      1: ['8:30', '9:00', '10:30', '11:00', '11:30'],
      2: ['9:30', '10:00', '10:30', '11:00', '11:30'],
      3: ['10:30', '11:00', '11:30', '12:00', '12:30'],
      4: ['12:30', '13:00', '13:30', '14:00', '14:30',
        '15:30', '15:00', '16:00', '16:30', '17:00', '17:30'],
      5: ['14:30', '15:00', '15:30', '16:00', '16:30'],
      6: ['15:30', '16:00', '16:30', '17:00', '17:30']
    },
    specificDate: {
      '08/01/2021': ['16:30', '17:00', '17:30', '18:00', '18:30']
    }
  },
  disabledDays: {
    week: [0, 6],
    specificDate: ['19/01/2021', '14/01/2021']
  }
}