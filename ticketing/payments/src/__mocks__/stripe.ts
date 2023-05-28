export const stripeChargeId = "321321";

export const stripe = {
  charges: {
    create: jest.fn().mockResolvedValue({ id: stripeChargeId }),
  },
};
