import { NextResponse } from 'next/server';
import { schema } from '@/api-schema/data';

export async function GET(request: Request, { params: { section } }: { params: { section: string } }) {
  if (schema[section]) {
    return NextResponse.json(schema[section]);
  } else {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
}
