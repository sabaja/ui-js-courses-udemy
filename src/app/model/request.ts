// https://roytuts.com/angular-spring-boot-security-jwt-authentication-and-authorization/
export interface Request {
	userName: string;
	userPwd: string;
	roles?: string[];
}