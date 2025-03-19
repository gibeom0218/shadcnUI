import { z } from 'zod';

export const formSchema = z.object({
  username: z
    .string()
    .min(2, '이름은 최소 2자 이상이어야 합니다.')
    .max(50, '최대 50자까지 입력 가능합니다.'),
  password: z.string().min(6, '비밀번호는 최소 6자 이상이어야 합니다.'),
});

export type FormSchemaType = z.infer<typeof formSchema>;
