import Link from 'next/link';
import { useState } from 'react';
import {
  AiOutlineClose,
  AiOutlineDown,
  AiOutlinePropertySafety,
  AiOutlineShopping,
  AiOutlineUp,
} from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import { FiSettings, FiUsers } from 'react-icons/fi';
import { GiProgression } from 'react-icons/gi';
import { GoPackage } from 'react-icons/go';
import { GrOrganization, GrServices, GrStatusInfo } from 'react-icons/gr';
import {
  MdAdsClick,
  MdOutlineAdminPanelSettings,
  MdOutlineBusinessCenter,
  MdOutlineCategory,
  MdOutlineFeaturedPlayList,
  MdOutlineFilterList,
  MdOutlineManageAccounts,
  MdOutlineMobileScreenShare,
  MdOutlineMyLocation,
  MdOutlineProductionQuantityLimits,
  MdOutlineReportProblem,
  MdOutlineUpgrade,
} from 'react-icons/md';
import { RiBarcodeLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';

import { setIsOpen } from '@/app/redux/store/slice/sidebarSlice';

const Sidebar = () => {
  const links = [
    {
      value: 'upgrade',
      icon: (
        <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center shadow-xl xl:p-2.5">
          <MdOutlineUpgrade />
        </div>
      ),
      name: 'Upgrade Request',
      link: '/dashboard/upgrade-request',
    },
    {
      value: 'admin',

      icon: (
        <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center shadow-xl xl:p-2.5">
          <MdOutlineAdminPanelSettings />
        </div>
      ),
      name: 'Admins',
      link: '/dashboard/admins/admins',
    },
    {
      value: 'user',
      icon: (
        <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center shadow-xl xl:p-2.5">
          <FiUsers />
        </div>
      ),
      name: 'Users',
      link: '/dashboard/',
    },
    {
      value: 'role',
      icon: (
        <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center shadow-xl xl:p-2.5">
          <GrStatusInfo />
        </div>
      ),
      name: 'Roles',
      link: '/dashboard/',
    },
    {
      value: 'account',
      icon: (
        <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center shadow-xl xl:p-2.5">
          <MdOutlineManageAccounts />
        </div>
      ),
      name: 'Accounts',
      link: '',
      childrens: [
        {
          name: 'Main Account',
          link: '/dashboard/accounts/main/accounts',
        },
        {
          name: 'Sub Account',
          link: '/dashboard/accounts/sub/accounts',
        },
      ],
    },
    {
      value: 'address',
      icon: (
        <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center shadow-xl xl:p-2.5">
          <MdOutlineMyLocation />
        </div>
      ),
      name: 'Address',
      link: '/dashboard/',
      childrens: [
        {
          name: 'Government',
          link: '/dashboard/',
        },
        {
          name: 'Cities',
          link: '/dashboard/',
        },
      ],
    },
    {
      value: 'categories',
      icon: (
        <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center shadow-xl xl:p-2.5">
          <MdOutlineCategory />
        </div>
      ),
      name: 'Categories',
      link: '/dashboard/',
      childrens: [
        {
          name: 'categories',
          link: '/dashboard/',
        },
        {
          name: 'sub categories',
          link: '/dashboard/',
        },
        {
          name: 'categories view',
          link: '/dashboard/',
        },
      ],
    },
    {
      value: 'filter',
      icon: (
        <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center shadow-xl xl:p-2.5">
          <MdOutlineFilterList />
        </div>
      ),
      name: 'Filter',
      link: '/dashboard/filter/filter_types',
    },
    {
      value: 'feature',
      icon: (
        <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center shadow-xl xl:p-2.5">
          <MdOutlineFeaturedPlayList />
        </div>
      ),
      name: 'Features',
      link: '/dashboard/filter/features',
    },

    {
      value: 'business',
      icon: (
        <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center shadow-xl xl:p-2.5">
          <MdOutlineBusinessCenter />
        </div>
      ),
      name: 'Business Profile',
      link: '/dashboard/business',
    },
    {
      value: 'ads',
      icon: (
        <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center shadow-xl xl:p-2.5">
          <MdAdsClick />
        </div>
      ),
      name: 'Ads',
      link: '/dashboard/ads',
    },
    {
      value: 'package',
      icon: (
        <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center shadow-xl xl:p-2.5">
          <GoPackage />
        </div>
      ),
      name: 'Coins shop',
      link: '/dashboard/coins',
    },
    {
      value: 'progression',
      icon: (
        <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center shadow-xl xl:p-2.5">
          <GiProgression />
        </div>
      ),
      name: 'Promotion shop',
      link: '/dashboard/promotions',
    },
    {
      value: 'barcode',
      icon: (
        <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center shadow-xl xl:p-2.5">
          <RiBarcodeLine />
        </div>
      ),
      name: 'Promo Code',
      link: '/dashboard/promocode',
    },

    {
      value: 'product',
      icon: (
        <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center shadow-xl xl:p-2.5">
          <MdOutlineProductionQuantityLimits />
        </div>
      ),
      name: 'Product ',
      link: '',
      childrens: [
        {
          name: 'Product Dashboard',
          link: '/dashboard/',
        },
        {
          name: 'Finished Product',
          link: '/dashboard/',
        },
      ],
    },
    {
      value: 'productMobile',
      icon: (
        <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center shadow-xl xl:p-2.5">
          <MdOutlineMobileScreenShare />
        </div>
      ),
      name: 'Product mobile',
      link: '',
      childrens: [
        {
          name: 'Pending product mobile',
          link: '/dashboard/product_mobile/pending_products',
        },
        {
          name: 'approved product mobile',
          link: '/dashboard/product_mobile/approved_products',
        },
        {
          name: 'rejected product mobile',
          link: '/dashboard/',
        },
        {
          name: 'finished product mobile',
          link: '/dashboard/',
        },
      ],
    },
    {
      value: 'productProperty',
      icon: (
        <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center shadow-xl xl:p-2.5">
          <AiOutlinePropertySafety />
        </div>
      ),
      name: 'Product Properties',
      link: '/dashboard/',
    },
    {
      value: 'organization',
      icon: (
        <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center shadow-xl xl:p-2.5">
          <GrOrganization />
        </div>
      ),
      name: 'Organization',
      link: '/dashboard/',
    },
    {
      value: 'organizationService',
      icon: (
        <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center shadow-xl xl:p-2.5">
          <GrServices />
        </div>
      ),
      name: 'Services',
      link: '',
      childrens: [
        {
          name: 'organization service',
          link: '/dashboard/',
        },
        {
          name: 'services',
          link: '/dashboard/',
        },
      ],
    },
    {
      value: 'organizationMobile',
      icon: (
        <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center shadow-xl xl:p-2.5">
          <MdOutlineMobileScreenShare />
        </div>
      ),
      name: 'Organization Mobile',
      link: '/dashboard/',
    },
    {
      value: 'website',
      icon: (
        <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center shadow-xl xl:p-2.5">
          <CgWebsite />
        </div>
      ),
      name: 'Website content',
      link: '/dashboard/',
    },
    {
      value: 'setting',
      icon: (
        <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center shadow-xl xl:p-2.5">
          <FiSettings />
        </div>
      ),
      name: 'Setting',
      link: '/dashboard/',
    },
    {
      value: 'marketer',
      icon: (
        <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center shadow-xl xl:p-2.5">
          <AiOutlineShopping />
        </div>
      ),
      name: 'Marketer',
      link: '/dashboard/',
    },
    {
      value: 'suggest',
      icon: (
        <div className="mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center shadow-xl xl:p-2.5">
          <MdOutlineReportProblem />
        </div>
      ),
      name: 'Suggestions',
      link: '',
      childrens: [
        {
          name: 'Contact us',
          link: '/dashboard/',
        },
        {
          name: 'Complainments',
          link: '/dashboard/',
        },
      ],
    },
  ];
  // const [showSidebar, setShowSidebar] = useState(false);
  const openSidebar = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  const [showChild, setShowChild] = useState(false);
  const handleSidebar = (item: any) => {
    return item.childrens
      ? setShowChild((prev) => (prev === item.value ? 0 : item.value))
      : setIsOpen(!openSidebar);
  };
  return (
    <>
      <aside
        style={{ background: 'rgb(248 249 250' }}
        className={`fixed ${
          openSidebar ? 'translate-x-0 ' : ' -translate-x-full '
        }  inset-y-0 z-40   block w-72   flex-wrap items-center justify-between  rounded-2xl border-0 bg-red-500   p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent`}
      >
        <div className="flex h-16 items-center justify-between px-8">
          <Link href="/dashboard">
            <a
              className="m-0 block whitespace-nowrap px-8 py-6 text-sm text-slate-700"
              rel="noreferrer"
            >
              <span className="ml-1 font-semibold transition-all duration-200">
                SUIIZ Dashboard
              </span>
            </a>
          </Link>

          <AiOutlineClose
            onClick={() => dispatch(setIsOpen(!openSidebar))}
            size={25}
            className="rounded-md bg-white p-1 shadow-xl md:hidden"
          />
        </div>
        <hr className="mt-0 h-px bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
        <div className=" block max-h-screen w-auto grow basis-full items-center overflow-auto">
          <ul className="mb-0 flex flex-col px-5 ">
            {links.map((item, index) => (
              <li
                onClick={() => dispatch(setIsOpen(!openSidebar))}
                key={index}
                className="mt-1 w-full rounded-2xl py-1 transition  duration-200"
              >
                <div
                  className="
                position-relative mt-1 flex  w-full  items-center justify-between rounded-2xl py-1 hover:bg-orange-500
                hover:shadow-2xl
                "
                >
                  <Link href={item.link ? item.link : '#'}>
                    <a className=" my-0 mx-4 flex items-center whitespace-nowrap py-2 px-4 text-sm transition-colors hover:scale-105">
                      {item.icon}
                      <span className="pointer-events-none ml-1 text-gray-700 opacity-100 duration-300 hover:shadow-2xl">
                        {item.name}
                      </span>
                    </a>
                  </Link>
                  {item.childrens && (
                    <span className="position-absolute right-0 ml-auto">
                      {showChild === item.value ? (
                        <AiOutlineUp
                          onClick={() => handleSidebar(item)}
                          size={20}
                          className="mr-2 rounded-md bg-white p-1 shadow-xl"
                        />
                      ) : (
                        <AiOutlineDown
                          onClick={() => handleSidebar(item)}
                          size={20}
                          className="mr-2 rounded-md bg-white p-1 shadow-xl"
                        />
                      )}
                    </span>
                  )}
                </div>

                {item.childrens && showChild === item.value && (
                  <ul className="mb-0 flex flex-col px-5 ">
                    {item.childrens.map((item, index) => (
                      <li
                        onClick={() => dispatch(setIsOpen(!openSidebar))}
                        key={index}
                        className="mt-1 w-full rounded-2xl py-1 transition  duration-200 hover:bg-orange-500  hover:shadow-2xl"
                      >
                        <Link href={item.link}>
                          <a className=" my-0 mx-4 flex items-center whitespace-nowrap py-2 px-4 text-sm transition-colors hover:scale-105">
                            <span className="pointer-events-none ml-1 text-gray-600 opacity-100 duration-300 hover:shadow-2xl">
                              {item.name}
                            </span>
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-4"></div>
      </aside>
    </>
  );
};

export default Sidebar;
