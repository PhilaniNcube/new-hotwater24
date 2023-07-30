const roundUp = (num:number) => {
   return Math.ceil(num/100) * 100
}
export const roundUpThousand = (num:number) => {
   return Math.ceil(num/4000) * 4000
}

export default roundUp
