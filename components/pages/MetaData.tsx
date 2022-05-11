import Head from 'next/head';
import type { FC } from 'react';
import type MetaDataProps from 'types/components/pages/MetaData';

const MetaData: FC<MetaDataProps> = ({
  description = 'os-nextjs ',
  title = 'os clone',
}) => (
  <Head>
    <title>{title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="description" content={description} />
  </Head>
);

export default MetaData;
