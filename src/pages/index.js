import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

export default function Home() {
  return (
    <Layout
      title="Under Construction"
      description="Salesforce Notes is currently under development"
    >
      <main
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '70vh',
          textAlign: 'center',
          flexDirection: 'column',
        }}
      >
        <Heading as="h1">🚧 Site Under Construction</Heading>
        <p style={{ maxWidth: '500px' }}>
          Salesforce Notes is currently being improved.
          New content, structured learning paths, and interactive quizzes
          are coming soon.
        </p>
        <p>
          Please check back later.
        </p>
      </main>
    </Layout>
  );
}