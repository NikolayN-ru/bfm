// import { OnlyAdminGuard } from './../guards/admin.guard';
// import { JwtAuthGuard } from './../guards/jwt.guard';
// import { applyDecorators, UseGuards } from "@nestjs/common";
// import { TypeRole } from "../auth.interface";

// export const Auth = (role: TypeRole = 'user') => applyDecorators(role === 'admin' ? UseGuards(JwtAuthGuard, OnlyAdminGuard) : UseGuards(JwtAuthGuard))

import { applyDecorators, UseGuards } from '@nestjs/common'
import { TypeRole } from '../auth.interface'
import { OnlyAdminGuard } from '../guards/admin.guard'
import { JwtAuthGuard } from '../guards/jwt.guard'

export function Auth(role: TypeRole = 'user') {
	return applyDecorators(
		role === 'admin'
			? UseGuards(JwtAuthGuard, OnlyAdminGuard)
			: UseGuards(JwtAuthGuard)
	)
}
