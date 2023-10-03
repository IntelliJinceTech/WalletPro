import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {BookmarkIcon, EllipsisHorizontalIcon, PencilSquareIcon, TrashIcon} from '@heroicons/react/20/solid'

const statuses = {
  Paid: 'text-green-700 bg-green-50 ring-green-600/20',
  Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
  Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const clients = [
  {
    id: 1,
    name: 'Chase',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/tuple.svg',
    lastInvoice: { date: 'December 13, 2022', dateTime: '2022-12-13', amount: '$2,000.00', status: 'Overdue' },
  },
]

const CreditCard = (props) => {
  return (
    <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8">
      {clients.map((client) => (
        <li key={client.id} className="overflow-hidden rounded-xl border border-gray-200">
          <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
            <div className="bg-white shadow xs:rounded-lg min-w-full">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex justify-between">
                  <h3 className="text-base font-semibold leading-6 text-gray-900">Chase</h3>
                  <h4 className="text-sm">Sapphire Preferred</h4>
                </div>
                <div className="mt-5 flex bg-gray-50">
                  <div className="rounded-md px-6 py-5 sm:flex sm:items-start sm:justify-between xs:w-full">
                    <h4 className="sr-only">Visa</h4>
                    <div className="sm:flex sm:items-start">
                      <svg className="h-8 w-auto xs:h-6 xs:flex-shrink-0" viewBox="0 0 36 24" aria-hidden="true">
                        <rect width={36} height={24} fill="#224DBA" rx={4} />
                        <path
                          fill="#fff"
                          d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z"
                        />
                      </svg>
                      <div>
                        <div className="mt-3 sm:ml-4 sm:mt-0 flex xs:justify-start sm:justify-around">
                          <div className="text-sm font-medium text-gray-900 pt-1 ">Ending with 4242</div>
                          <div className="mt-1 ml-3 text-sm text-gray-600 sm:flex sm:items-center">Expires 12/20</div>
                        </div>
                        <div className="text-sm text-gray-600 sm:flex sm:items-center xs:ml-0 sm:ml-4 mt-3">Add</div>
                      </div>
                    </div>
                  </div>
                    <div className="flex flex-col justify-around">
                        <PencilSquareIcon className="mr-2 text-black w-6"/>
                        <TrashIcon className="w-6"/>
                        <BookmarkIcon className="w-6"/>
                    </div>
                </div>
              </div>
            </div>
            {/* <img src={client.imageUrl} alt={client.name} className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10" />
            <div className="text-sm font-medium leading-6 text-gray-900">{client.name}</div> */}
            {/* <Menu as="div" className="relative ml-auto">
              <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Open options</span>
                <EllipsisHorizontalIcon className="h-5 w-5" aria-hidden="true" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a href="#" className={classNames(active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900')}>
                        View<span className="sr-only">, {client.name}</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a href="#" className={classNames(active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900')}>
                        Edit<span className="sr-only">, {client.name}</span>
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu> */}
          </div>
          <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6 bg-blue-800 text-gray-50">
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="">Average Weekly Point Accumulation</dt>
              <dd className="">
                9000
              </dd>
            </div>
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="">Rewards Total</dt>
              <dd className="flex items-start gap-x-2">
                5000
              </dd>
            </div>
          </dl>
        </li>
      ))}
    </ul>

    // <div className="card h-1/2 bg-secondary shadow-xl text-primary-content rounded w-5/6 place-self-center">
    //   <div className="card-body rounded">
    //     <h2 className="card-title">Chase</h2>
    //     <p>Sapphire Preferred</p>
    //     <div className="card-actions justify-end">
    //       <button className="btn">VISA</button>
    //     </div>
    //   </div>

    //   <button className="mt-10 btn btn-outline btn-error">Delete Card</button>
    // </div>
  )
}

export default CreditCard
