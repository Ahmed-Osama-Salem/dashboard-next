import type { ReactNode } from 'react';

import FooterAdmin from '@/ui/component/FooterAdmin';
import Navbar from '@/ui/component/Navbar';
import Sidebar from '@/ui/component/Sidebar';

type IDashboardProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Dashboard = (props: IDashboardProps) => (
  <div
    style={{ background: 'rgb(248 249 250' }}
    className="w-full  px-1 text-gray-700 antialiased"
  >
    {props.meta}

    <Sidebar />
    <div className="bg-blueGray-100 xl:ml-72">
      <Navbar />
      <div className=" w-full md:px-10">
        {props.children}
        <FooterAdmin />
      </div>
    </div>
  </div>
);

export { Dashboard };
