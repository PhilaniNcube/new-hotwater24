import analytics from '../utils/analytics'


export const start = () => {
  console.log('start');

  analytics.track('start_recommendation');
};

export const savings = () => {
  console.log('saving');

  analytics.track('saving');
};
