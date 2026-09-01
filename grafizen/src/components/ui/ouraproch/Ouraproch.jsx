import React from 'react';
import { CalendarCheck2, CircleUserRound, ShieldCheck } from 'lucide-react';

const Ouraproch = () => {
  const approaches = [
    {
      id: 1,
      icon: CalendarCheck2,
      title: 'Book Appointments',
      description: 'You apply for funding and we set-up an intro with you to get to know the team.'
    },
    {
      id: 2,
      icon: CircleUserRound,
      title: 'Due Diligence',
      description: 'After that, we go through a few due diligence procedures to align our interests.'
    },
    {
      id: 3,
      icon: ShieldCheck,
      title: 'Deal Signed',
      description: 'Once we are done with due diligence, then we commit to your round and build with you.'
    }
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#050505] px-4 py-20 md:px-8">
      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div className="mb-16 text-center md:mb-20">
          <h2 className="text-[2.4rem] font-semibold tracking-[-0.05em] text-white md:text-[3.5rem]">
            Our <span className="text-[#dd0403]">Approach</span>
          </h2>
        </div>

        <div className="relative">
          <svg
            className="pointer-events-none absolute left-1/2 top-20 hidden h-[150px] w-[72%] -translate-x-1/2 lg:block"
            viewBox="0 0 900 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M94 82C172 82 250 82 332 82C408 82 478 82 560 82C640 82 706 82 806 82"
              stroke="rgba(255,255,255,0.45)"
              strokeWidth="2"
              strokeDasharray="8 14"
              strokeLinecap="round"
            />
            <path
              d="M96 82C135 110 155 122 179 122C208 122 214 110 245 82"
              stroke="rgba(255,255,255,0.45)"
              strokeWidth="2"
              strokeDasharray="8 14"
              strokeLinecap="round"
            />
            <path
              d="M706 82C735 110 756 122 780 122C809 122 815 110 846 82"
              stroke="rgba(255,255,255,0.45)"
              strokeWidth="2"
              strokeDasharray="8 14"
              strokeLinecap="round"
            />
          </svg>

          <div className="relative z-10 grid gap-14 md:grid-cols-3">
            {approaches.map((approach) => {
              const Icon = approach.icon;

              return (
                <div
                  key={approach.id}
                  className="flex flex-col items-center text-center md:items-start md:text-left"
                >
                  <div className="mb-7 flex h-24 w-24 items-center justify-center rounded-[1.5rem] bg-[#0f8efc] shadow-[0_15px_30px_rgba(20,132,255,0.25)] ring-1 ring-white/10 md:h-28 md:w-28">
                    <Icon className="h-10 w-10 text-white md:h-12 md:w-12" strokeWidth={2.2} />
                  </div>

                  <h3 className="mb-4 text-3xl font-semibold leading-tight text-white md:text-[2.15rem]">
                    {approach.title}
                  </h3>

                  <p className="max-w-[260px] text-base leading-relaxed text-white/75 md:text-lg">
                    {approach.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ouraproch;
