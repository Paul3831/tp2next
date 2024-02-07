import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Header from '@/app/ui/dashboard/header';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <Header/>

       <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>

      <div className="w-full">
      <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 w-full md:w-full lg:w-2/3 xl:w-1/2 md:px-20 mx-auto">
  <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
    <strong>To invite</strong> someone to your room share the link below{' '}
  </p>
  <div className="text-blue-700">aaaaaaaaaaaa

  <div className="bg-red-600">bhjefgvj
  
  </div>
</div> </div>



        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
        </div>
      </div>
    </main>
  );
}
