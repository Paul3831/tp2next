  import { ArrowRightIcon } from '@heroicons/react/24/outline';
  import Link from 'next/link';
  import Header from '@/app/ui/dashboard/header';
  import Date from '@/app/ui/dashboard/date';
  import MainComponent from '@/app/ui/dashboard/MainComponent';
  import Image from 'next/image'


  export default function Page() {
    return (
      <main className="flex flex-col h-full bg-gray-800 gap-4">
       <Header/> 

        <div className="flex w-full flex-grow border-r-4">
          <div className="order-2 md:order-1 white-square flex-grow flex flex-col justify-between">
            <Date />
            <div className="text-blue-700 flex-grow">aaaaaaaaaaaa
              <MainComponent />
              <div className="flex-grow flex items-end justify-center">
                <p className={`text-xl text-center text-gray-800 md:text-3xl md:leading-normal mt-20`}>
                  <strong>To invite</strong> someone to your room<br/> share the link below{' '}
                 </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
