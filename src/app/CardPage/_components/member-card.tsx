import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { EX_MEMBERS } from '@/constants/CardPage/ex-members';
import Image from 'next/image';

export const MemberCard = ({
  memberName,
  description,
  profileImage,
  phoneNumber,
}: (typeof EX_MEMBERS)[0]) => {
  return (
    <Card>
      <CardHeader>
        <div className="relative h-20 w-20">
          <Image
            src={profileImage}
            alt={`${memberName}의 프로필`}
            fill
            className="aspect-square rounded-full object-cover"
          />
        </div>
        <CardTitle className="text-xl font-semibold">{memberName}</CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="px-6 pb-6">📞 {phoneNumber}</CardFooter>
    </Card>
  );
};
