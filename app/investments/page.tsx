import { auth } from 'app/auth';
import { getGuestbookEntries } from 'app/db/queries';
import { SignIn, SignOut } from './buttons';
import { Suspense } from 'react';
import Form from './form';
import Link from 'next/link';
export const metadata = {
  title: 'Investments',
  description: 'Sign my guestbook and leave your mark.',
};

export default function GuestbookPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        investments
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
      “All the returns in life, whether in wealth, relationships, or knowledge, come from compound interest.” — Naval Ravikant
      </p>
      <br></br>
      <p className="prose prose-neutral dark:prose-invert">
      <a href='https://anthropic.com'>Anthropic</a> — building the next generation of AI
      </p>
      <p className="prose prose-neutral dark:prose-invert">
      <a href='https://vanta.com'>Vanta</a> — security and compliance for startups
      </p>
      <p className="prose prose-neutral dark:prose-invert">
      <a href='https://www.anyscale.com/'>Anyscale</a> — distributed computing for everyone
      </p>
      <br></br>
      <p className="prose prose-neutral dark:prose-invert">
      <i>I'm investing through the multi-stage <a href="https://fundrise.com/offerings/26/view">Innovation Fund</a>. This is an learning experiment for me to purely understand technology investing as someone that works in technology and would like to scout in the future. I'm not an accredited investor and this is not investment advice, please do your own due diligence!</i>
      </p>
      </section>
  );
}

async function GuestbookForm() {
  let session = await auth();

  return session?.user ? (
    <>
      <Form />
      <SignOut />
    </>
  ) : (
    <SignIn />
  );
}

async function GuestbookEntries() {
  let entries = await getGuestbookEntries();

  if (entries.length === 0) {
    return null;
  }

  return entries.map((entry) => (
    <div key={entry.id} className="flex flex-col space-y-1 mb-4">
      <div className="w-full text-sm break-words">
        <span className="text-neutral-600 dark:text-neutral-400 mr-1">
          {entry.created_by}:
        </span>
        {entry.body}
      </div>
    </div>
  ));
}
