import { NextResponse } from 'next/server';
import { schema } from '@/api-schema/data';

export async function GET(request: Request) {
  return NextResponse.json({ sections: Object.keys(schema) });
}
