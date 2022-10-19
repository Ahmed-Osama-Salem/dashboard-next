import { useState } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { GoUnverified } from 'react-icons/go';

import type { Iuser } from '@/app/interface/usersdata/Iusers';

const UserBodyTable = ({ user }: { user: Iuser }) => {
  const [isHover, setIsHover] = useState(0);
  return (
    <tr
      key={user.id}
      onMouseEnter={() => setIsHover(user.id)}
      onMouseLeave={() => setIsHover(0)}
      className={
        isHover === user.id
          ? 'border-b bg-orange-200 dark:border-gray-700 dark:bg-gray-800'
          : 'border-b bg-white transition-all dark:border-gray-700 dark:bg-gray-800'
      }
    >
      <th
        scope="row"
        className="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
      >
        {user.id}
      </th>
      <td className="py-4 px-6">
        <img
          className="w-[50px] rounded-full"
          src={user.avatar}
          alt={user.name}
        />
      </td>
      <td className="py-4 px-6">{user.name}</td>
      <td className="py-4 px-6">{user.mobile}</td>
      <td className="py-4 px-6">{user.country}</td>
      <td className="py-4 px-6">
        {user.mobileVerified ? (
          <BsCheckCircleFill className="text-green-500" />
        ) : (
          <GoUnverified className="text-red-500" />
        )}
      </td>
      <td className="py-4 px-6">
        {user.emailVerified ? (
          <BsCheckCircleFill className="text-green-500" />
        ) : (
          <GoUnverified className="text-red-500" />
        )}
      </td>
      <td className="py-4 px-6">{user.coins}</td>
      <td className="py-4 px-6">{user.adsCount}</td>
    </tr>
  );
};

export default UserBodyTable;
