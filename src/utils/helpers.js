const formatUsd = (number) => {
   return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
   }).format(number).replace('$', '$ ');
}

export { formatUsd }