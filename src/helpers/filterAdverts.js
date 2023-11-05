export default (filters, adverts, withMake = false) => {
  if (!filters || !adverts) return adverts;

  return adverts.filter((item) => {
    let filtered = true;

    if (withMake && filters.make && item.make !== filters.make) {
      filtered = false;
    }
    if (
      filters.rentalPrice &&
      Number.parseInt(item.rentalPrice.split('$')[1]) >
        Number.parseInt(filters.rentalPrice.split('$')[1])
    ) {
      filtered = false;
    }
    if (
      filters.mileage?.from &&
      item.mileage < Number.parseInt(filters.mileage?.from)
    ) {
      filtered = false;
    }
    if (
      filters.mileage?.to &&
      item.mileage > Number.parseInt(filters.mileage?.to)
    ) {
      filtered = false;
    }
    return filtered;
  });
};
