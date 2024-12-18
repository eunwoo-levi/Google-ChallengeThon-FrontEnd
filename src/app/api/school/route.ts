import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: NextRequest) {
  try {
    const authorization = request.headers.get('authorization');

    if (!authorization) {
      return NextResponse.json(
        { message: '인증 토큰이 없습니다.' },
        { status: 401 }
      );
    }

    const today = new Date();
    today.setDate(today.getDate() - 1); // 하루 전으로 설정
    const date = today.toISOString().split('T')[0].replace(/-/g, '');

    const response = await axios.get(
      `https://foodeat.o-r.kr/diets/school?date=${date}`,
      {
        headers: {
          Authorization: authorization,
        },
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        { message: error.response?.data?.message || '서버 에러가 발생했습니다.' },
        { status: error.response?.status || 500 }
      );
    }
    return NextResponse.json(
      { message: '서버 에러가 발생했습니다.' },
      { status: 500 }
    );
  }
}