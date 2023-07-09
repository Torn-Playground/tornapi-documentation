import { NextResponse } from 'next/server';
import { isSection, schema } from '@/api-schema/data';

export async function GET(request: Request, { params: { section } }: { params: { section: string } }) {
  if (isSection(section)) {
    return NextResponse.json(schema[section]);
  } else {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
}
