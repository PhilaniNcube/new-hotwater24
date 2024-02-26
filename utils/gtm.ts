import { sendGTMEvent } from '@next/third-parties/google';



export const start = () => {
  console.log('start');

  sendGTMEvent({ event: 'start_recommendation' })
};

export const savings = () => {
  console.log('saving');


  sendGTMEvent({ event: 'saving' })
};
