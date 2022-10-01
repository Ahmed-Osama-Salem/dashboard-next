import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Suiiz Tech Team"
          description="Suiiz Tech Team Next.js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div>
        <h1>Suiiz Tech Team</h1>
      </div>
    </Main>
  );
};

export default Index;
