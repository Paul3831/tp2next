import Header from '@/app/ui/dashboard/header';
import Date from '@/app/ui/dashboard/date';
import PatientQueue from '@/app/ui/dashboard/patient';
import MainComponent from '@/app/ui/dashboard/MainComponent';
import Linnk from '@/app/ui/dashboard/linnk';

export default function Page() {
  const roomLink = "https://example.com/room"; 

  return (
    <main className="flex flex-col h-full bg-gray-800 gap-4">
      <Header/>

      <div className="flex w-full flex-grow border-r-4">
        <div className="order-2 md:order-1 white-square flex-grow flex flex-col justify-between">
          <div className="flex flex-wrap gap-20"> 
            <Date  /> 
            <PatientQueue />
          </div>
          <div className="text-blue-700 flex-grow">
            <MainComponent />
            <div className="flex-grow flex items-end justify-center">
            <Linnk/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
