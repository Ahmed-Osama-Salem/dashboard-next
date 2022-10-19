import { Meta } from '@/layouts/Meta';
import { Dashboard } from '@/templates/Dashboard';
import { Main } from '@/templates/Main';
import UsersTabel from '@/ui/component/users/UsersTable';

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
        <Dashboard>
          <UsersTabel />
        </Dashboard>
      </div>
    </Main>
  );
};

export default Index;
