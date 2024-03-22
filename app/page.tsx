
import Image from 'next/image' ; 
import airport from 'public/images/airport.jpg';
import bombay from 'public/images/bombay.jpg';
import delhi from 'public/images/delhi.jpg';
import pennapps from 'public/images/pennapps.jpg';
function ArrowIcon() {
  return (  
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}
export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Rohit Bommisetti</h1>
      <p className="prose prose-neutral dark:prose-invert">
      Relentless optimism ☀️
      </p>
      <p className="prose prose-neutral dark:prose-invert">
      
      </p>
      <p className="prose prose-neutral dark:prose-invert">
     
      </p>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
        In the past, I have spent my time building <a href="https://colabpitt.substack.com">CoLab</a>, the community 
        for ambitious student builders at the University of Pittsburgh, and <a href="https://inspiritai.com"> teaching AI</a> with the Stanford crew in India. 
        </p>
      </div>
       {/*
      <div className="prose prose-neutral dark:prose-invert">
        <p>
        I was born in India, raised in Pennsylvania, and live in the Big Apple.
        </p>
      </div> 
      */}
      {/*
      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={airport}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={bombay}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={delhi}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={pennapps}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div> */}
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/rohitbommisetti"
          >
               <ArrowIcon />
            <p className="h-7 ml-2">follow me</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://rohitta.substack.com"
          > 
             <ArrowIcon />
            <p className="h-7 ml-2">get email updates</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://linkedin.com/in/rohitbommisetti"
          > 
             <ArrowIcon />
            <p className="h-7 ml-2">my resume</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
