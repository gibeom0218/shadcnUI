import { EX_MEMBERS } from '@/constants/CardPage/ex-members';
import { MemberCard } from './_components/member-card';

const CardPage = () => {
  return (
    <main className="w-full flex-grow">
      <h1 className="mb-8 text-center text-3xl font-bold">팀원 소개</h1>
      <div className="grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {EX_MEMBERS.map((member, index) => (
          <MemberCard key={index} {...member} />
        ))}
      </div>
    </main>
  );
};

export default CardPage;
