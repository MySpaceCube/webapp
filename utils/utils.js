export const getDateFormat = (datetime) => {
  return new Date(datetime).getDate() + '/' + new Date(datetime).getMonth() + '/' + new Date(datetime).getFullYear()
}

export const getDateTimeFormat = (datetime) => {
  return new Date(datetime).getUTCDate().toLocaleString()
}
