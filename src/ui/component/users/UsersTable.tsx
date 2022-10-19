import { userData } from '@/app/server/userdata/userdata';

import UserBodyTable from './UsersBodyTable';

const UsersTabel = () => {
  // const [nameFilter, setNameFilter] = useState('');
  // const [filterList, setFilterList] = useState('');
  // const [data, setData] = useState(userData);

  // const handelSearchInput = () => {};

  // const handelFilterList = (e) => {
  //   const values = e.target.value;
  //   setFilterList(values);
  // };
  // console.log(filterList);
  // console.log(nameFilter);

  return (
    <div>
      <div className="mb-2">
        <input
          className="m-1 rounded-lg bg-slate-200 p-2 outline-none placeholder:text-white"
          type="text"
          placeholder="Type SomeThing"
          name="searchbar"
          // onChange={(e) => setNameFilter(e.target.value)}
          // value={nameFilter}
        />

        <select
          // onChange={handelFilterList}
          name="searchType"
          // value={filterList}
          className="  rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        >
          <option value="All">search type</option>
          <option value="country">country</option>
          <option value="name">name</option>
          <option value="mobile">mobile</option>
        </select>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                id
              </th>
              <th scope="col" className="py-3 px-6">
                avatar
              </th>
              <th scope="col" className="py-3 px-6">
                name
              </th>
              <th scope="col" className="py-3 px-6">
                mobile
              </th>
              <th scope="col" className="py-3 px-6">
                country
              </th>
              <th scope="col" className="py-3 px-6">
                mobile verified
              </th>
              <th scope="col" className="py-3 px-6">
                email verified
              </th>
              <th scope="col" className="py-3 px-6">
                coins
              </th>
              <th scope="col" className="py-3 px-6">
                ads count
              </th>
            </tr>
          </thead>

          <tbody>
            {userData
              // .filter((item) => {
              //   if (item.name === '') {
              //     return item;
              //   }
              //   if (item.name.toLocaleLowerCase().includes(nameFilter)) {
              //     return item;
              //   }
              // })
              .map((user, index) => {
                return <UserBodyTable key={index} user={user} />;
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTabel;
