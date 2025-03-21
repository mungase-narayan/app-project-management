import { LucideIcon } from "lucide-react";

export enum PricingModel {
  FREE = "Free",
  PREMIUM = "Premium",
  ENTERPRISE = "Enterprise",
}

export enum UserLoginType {
  GOOGLE = "GOOGLE",
  GITHUB = "GITHUB",
  EMAIL_PASSWORD = "EMAIL_PASSWORD",
}

export enum UserRoles {
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface Avatar {
  url: string;
}

export interface User {
  _id?: string;
  fullName: string;
  email: string;
  avatar: Avatar;
  role: UserRoles;
  password: string;
  loginType: UserLoginType;
  pricingModel: PricingModel;
}

export interface NavLinkType {
  id: number;
  title: string;
  path: string;
  isProtected: boolean;
  icon: LucideIcon;
}

export interface FeatureType {
  id: number;
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
}
