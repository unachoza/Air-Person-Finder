import React from 'react';
// @ts-ignore
import { css } from '@emotion/react';
import { PulseLoader } from 'react-spinners';

const override: any = css`
  margin-left: 47%;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const Loading = (loading: boolean): JSX.Element => {
  return (
    <div className="sweet-loading">
      <PulseLoader css={override} size={15} color={'#5285C1'} loading={loading} />
    </div>
  );
};

export default Loading;
