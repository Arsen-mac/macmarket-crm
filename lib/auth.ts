import { cookies } from 'next/headers';
import { jwtVerify, SignJWT } from 'jose';
import { db } from './db';
const secret = new TextEncoder().encode(process.env.AUTH_SECRET || 'dev-secret-change-me');
export async function createSession(userId:string){return new SignJWT({userId}).setProtectedHeader({alg:'HS256'}).setIssuedAt().setExpirationTime('7d').sign(secret)}
export async function getUser(){const token=(await cookies()).get('session')?.value;if(!token)return null;try{const {payload}=await jwtVerify(token,secret);return payload.userId?db.user.findUnique({where:{id:String(payload.userId)}}):null}catch{return null}}
export async function requireUser(){const u=await getUser();if(!u)throw new Error('UNAUTHORIZED');return u}
