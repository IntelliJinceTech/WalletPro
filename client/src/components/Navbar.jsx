import { CgProfile } from 'react-icons/cg'
import { themeChange } from 'theme-change'
import { useEffect } from 'react'

const Navbar = (props) => {
  useEffect(() => {
    themeChange(false)
  }, [])
  {
    /* <select data-choose-theme>
    <option value="">Default</option>
    <option value="light">Light</option>
    <option value="dark">Dark</option>
    <option value="corporate">Corporate</option>
    <option value="business">Business</option>
  </select> */
  }
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">WalletPro</a>
      </div>
      <div className="flex-none ">
        <ul className="menu menu-horizontal px-1">
          <li>
            <div className="flex items-stretch p-0">
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost rounded-btn">
                  <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-5 w-5 stroke-current">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    ></path>
                  </svg>
                  Theme
                </label>
              </div>
            </div>

            {/* <select data-choose-theme className="select select-primary w-full max-w-xs rounded p-2">
              <option disabled selected >
                Select Theme
              </option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="corporate">Corporate</option>
              <option value="business">Business</option>
            </select> */}
          </li>
        </ul>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <CgProfile className=" text-lg min-h-full min-w-full" />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                {/* <span className="badge">New</span> */}
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
