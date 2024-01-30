import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { CartWidget } from "./CartWidget"
export const Navbar = () =>{

return (
    <>
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                    <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                    <span className="absolute -inset-0.5"></span>
                    <span className="sr-only">Open main menu</span>

                    
                    <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex flex-shrink-0 items-center mr-6">
                        <p className='logo text-white font-extrabold'>TechStore</p>
                    </div>
                    <div className="hidden sm:ml-6 sm:block lg:justify-end">
                    <div className="lx yz space-x-4">
                        <button className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Apple</button>
                        <button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Samsung</button>
                        <button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Amazon</button>
                    </div>
                    </div>
                </div>
                <div className="inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <CartWidget/>
                </div>
            </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2">
            <button className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Apple</button>
            <button className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Samsung</button>
            <button className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Amazon</button>
            </div>
        </div>
        </nav>
    </>
    )

}