import { Link } from '@inertiajs/react';
import { Fragment } from 'react';

export default function Welcome({ auth }) {
    return (
        <div className="relative sm:flex sm:justify-center 
        sm:items-center min-h-screen bg-dots-darker bg-center 
        bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 
        selection:bg-red-500 selection:text-white">
            
            <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                {!auth.user ? (
                    <div className="bg-amber-50	">
                        
                        <Link
                            href={route('login')}
                            className=""
                        >
                            Logar
                        </Link>

                        <Link
                            href={route('register')}
                            className="ms-4 font-semibold text-gray-600
                             hover:text-gray-900 dark:text-gray-400
                             dark:hover:text-white focus:outline
                             focus:outline-2 focus:rounded-sm 
                             focus:outline-red-500"
                        >
                            Register
                        </Link>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
