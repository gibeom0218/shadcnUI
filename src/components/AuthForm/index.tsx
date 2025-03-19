'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FormSchemaType, formSchema } from '@/schemas/formSchema';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Eye, EyeOff, Lock, User } from 'lucide-react';
import { useState } from 'react';

const AuthForm = () => {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (values: FormSchemaType) => {
    alert(
      `회원가입에 성공하였습니다!!\n이름 : ${values.username} \n비번 : ${values.password}`,
    );
  };

  return (
    <Card className="w-[400px] border border-gray-200 shadow-lg">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">
          회원가입
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            {/* Username 필드 */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User
                        className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400"
                        size={18}
                      />
                      <Input
                        placeholder="홍길동"
                        {...field}
                        className="pl-10"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password 필드 */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Lock
                        className="absolute left-3 top-1/2 -translate-y-1/2 transform text-gray-400"
                        size={18}
                      />
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="비밀번호 입력"
                        {...field}
                        className="pl-10 pr-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 transform text-gray-400"
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <CardFooter className="flex flex-col gap-3">
              <Button type="submit" className="w-full">
                회원가입
              </Button>
              <p className="text-center text-sm text-gray-500">
                이미 계정이 있으신가요?{' '}
                <a href="" className="text-blue-500 hover:underline">
                  로그인
                </a>
              </p>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default AuthForm;
