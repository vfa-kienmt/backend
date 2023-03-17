import * as bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export async function getHash(password: string): Promise<string> {
  return await bcrypt.hash(password, SALT_ROUNDS);
}

export async function verification(password: string, hash: string) {
  return await bcrypt.compare(password, hash);
}
