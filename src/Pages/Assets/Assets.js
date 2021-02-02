import React from 'react';
import { Section, Wrapper, Header } from 'Components';
import { AssetsHeader, AssetsInformation, AssetsTxsList, AssetsHolders } from './Components';

const Assets = () => (
  <Wrapper>
    <Header title="Asset Details">
      <AssetsHeader />
    </Header>
    <Section header>
      <AssetsInformation />
    </Section>
    <Section>
      <AssetsTxsList />
    </Section>
    <Section>
      <AssetsHolders />
    </Section>
  </Wrapper>
);

export default Assets;
