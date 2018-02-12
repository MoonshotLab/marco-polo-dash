import { injectGlobal } from 'styled-components';
import normalize from 'styled-normalize';
import skeleton from 'styled-skeleton';

export default () => {
  injectGlobal`
    ${normalize}
    ${skeleton}

    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
    }
  `;
};
