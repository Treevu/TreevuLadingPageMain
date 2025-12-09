
export const scanReceipt = async (file: File | string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        total: 125.50,
        merchant: 'Supermercados Peruanos S.A.',
        date: new Date().toISOString(),
        items: []
      });
    }, 1500);
  });
};
