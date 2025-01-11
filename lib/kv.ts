import { kv } from '@vercel/kv';

export async function setUser(email: string, userData: any) {
  await kv.set(`user:${email}`, JSON.stringify(userData));
}

export async function getUser(email: string) {
  const userData = await kv.get(`user:${email}`);
  return userData ? JSON.parse(userData as string) : null;
}

export async function deleteUser(email: string) {
  await kv.del(`user:${email}`);
}

