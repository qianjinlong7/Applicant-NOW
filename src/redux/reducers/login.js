const initState = 0
export default function login(preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case 1:
      return preState + data
    default:
      return preState
  }
}