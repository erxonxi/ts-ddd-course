import bcrypt from 'bcryptjs';

export class HashEncrypt {
  static async hash(value: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(value, salt);
  }

  static async compare(value: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(value, hash);
  }
}
